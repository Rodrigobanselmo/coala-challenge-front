import { BBooksList } from "@/components/BBooksList";
import { BContainer } from "@/components/BContainer";
import { useAuth } from "@/core/contexts/AuthContext";
import { RoutesEnum } from "@/core/enums/routes.enums";
import { IBook } from "@/core/interfaces/IBook";
import { useInfiniteQueryBooks } from "@/hooks/useInfiniteQueryBooks";
import { useMutateCreateBookExchange } from "@/hooks/useMutateCreateBookExchange";
import { useSearchValue } from "@/hooks/useSearchValue";
import { useEffect } from "react";


export default function WelcomePage() {
  return (
    <BContainer flex={1} width={"100%"}>
      ola
    </BContainer>
  );
}
