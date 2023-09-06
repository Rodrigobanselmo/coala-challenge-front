import { BBookIcon } from "@/assets/icons/BBookIcon";
import { BContainer } from "@/components/BContainer";
import { BPageTitle } from "@/components/BPageTitle";
import { IBook } from "@/core/interfaces/IBook";
import { IPaginationResult } from "@/core/interfaces/IPaginationResult";
import { getFindBooks } from "@/core/services/api/getFindBooks";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";

export async function getStaticProps() {
  const books = await getFindBooks();

  return {
    props: {
      data: books,
    },
  };
}

export default function Home({ data }: { data: IPaginationResult<IBook> }) {
  return (
    <BContainer>
      <BPageTitle icon={BBookIcon}>Livros para troca</BPageTitle>
      klxnkdl
    </BContainer>
  );
}
