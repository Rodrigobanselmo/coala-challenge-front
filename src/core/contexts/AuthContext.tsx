import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import Router, { useRouter } from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useSnackbar } from "notistack";

import { firebaseAuth, firebaseProvider } from "../../configs/firebase";

import { ApiRoutesEnum } from "@/core/enums/api-routes.enums";

import { RoutesEnum } from "../enums/routes.enums";
import { IUser } from "../interfaces/IUser";
import { api } from "../services/apiClient";
import { ISession } from "../interfaces/ISession";

export type SignInCredentials = {
  token?: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  googleSignIn: () => Promise<void | UserCredential>;
  signOut: () => void;
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  isLoading: (loading: boolean) => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export async function signOut(ctx?: any) {
  destroyCookie(null, "nextauth.token", { path: "/" });
  if (authChannel) authChannel.postMessage("signOut");

  await firebaseAuth.signOut();
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, isLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const isAuthenticated = !!user;

  const signOutFunc = useCallback(() => {
    setUser(null);
    signOut().finally(() => {
      isLoading(false);
    });
  }, []);

  const getMe = useCallback(async () => {
    try {
      const response = await api.get(ApiRoutesEnum.ME);
      setUser({
        ...response.data,
      });
    } catch (error) {
      signOutFunc();
    }
  }, [signOutFunc]);

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    if (token) getMe();
  }, [getMe]);

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          if (parseCookies()["nextauth.token"]) signOutFunc();
          break;
        default:
          break;
      }
    };
  }, [signOutFunc]);

  const signToken = ({ token, user }: ISession) => {
    setCookie(null, "nextauth.token", token, {
      maxAge: 60 * 60 * 25 * 30, // 30 days
      path: "/",
    });

    setUser(user);

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    (api.defaults.headers as any)["Authorization"] = `Bearer ${token}`;

    authChannel.postMessage("signIn");
  };

  async function signIn({ token }: SignInCredentials) {
    const path = ApiRoutesEnum.GOOGLE_LOGIN;

    const payload = { token };

    const response = await api.post<IUser>(path, payload);
    if (response.data && token) signToken({ user: response.data, token });
  }

  async function googleSignIn() {
    const result = await signInWithPopup(firebaseAuth, firebaseProvider).catch(
      (error) => {
        signOutFunc();
        console.log(123, error);
        enqueueSnackbar("Erro ao tentar fazer login com o Google", {
          variant: "error",
        });
      }
    );
    if (result) {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const googleToken = credential.idToken;

        try {
          isLoading(true);
          await signIn({ token: googleToken });
          isLoading(false);
        } catch (error) {
          const isErrorResponse =
            typeof error === "object" &&
            !!error &&
            "response" in error &&
            !!error.response &&
            typeof error.response === "object" &&
            "data" in error.response &&
            !!error.response.data;

          if (isErrorResponse)
            enqueueSnackbar((error as any)?.response.data.message, {
              variant: "error",
            });

          await firebaseAuth.signOut();
          isLoading(false);
        }
      }
    }

    return result;
  }

  return (
    <AuthContext.Provider
      value={{
        signOut: signOutFunc,
        googleSignIn,
        signIn,
        user,
        isAuthenticated,
        loading,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextData => useContext(AuthContext);
