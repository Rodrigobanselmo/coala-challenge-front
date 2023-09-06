import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import { useDisclosure } from "../../hooks/useDisclosure";

interface SidebarDrawerContextData {
  isMobile: boolean;
  isTablet: boolean;
  alwaysOpen: boolean;
  setAlwaysOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

interface ISidebarDrawerProps {
  children: ReactNode;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: ISidebarDrawerProps): JSX.Element {
  const isMobile = !useMediaQuery("(min-width:600px)");
  const isTablet = !useMediaQuery("(min-width:1100px)");
  const isDesktop = !useMediaQuery("(min-width:5000px)");

  const disclosure = useDisclosure(true);
  const router = useRouter();

  const [urlRouter, setUrlRouter] = useState(router.asPath);
  const [alwaysOpen, setAlwaysOpen] = useState(true);

  useEffect(() => {
    if (urlRouter !== router.asPath && isTablet) {
      disclosure.close();
      setUrlRouter(router.asPath);
    }
  }, [disclosure, router.asPath, urlRouter, isTablet]);

  useEffect(() => {
    if (isTablet && !isDesktop) {
      disclosure.close();
    }
  }, [disclosure, isDesktop, isTablet]);

  const onClose = useCallback(() => {
    disclosure.close();
    if (isTablet) setAlwaysOpen(false);
  }, [disclosure, isTablet]);

  const isOpen = useMemo(() => {
    return disclosure.isOpen || alwaysOpen;
  }, [alwaysOpen, disclosure.isOpen]);

  return (
    <SidebarDrawerContext.Provider
      value={{
        ...disclosure,
        close: onClose,
        isMobile: !!isMobile,
        isTablet: !!isTablet,
        alwaysOpen,
        isOpen,
        setAlwaysOpen,
      }}
    >
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = (): SidebarDrawerContextData =>
  useContext(SidebarDrawerContext);
