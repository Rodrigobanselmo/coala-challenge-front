import { RoutesEnum } from "@/core/enums/routes.enums";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";

export const useSearchValue = ({
  field,
  pathname,
}: {
  field: string;
  pathname: RoutesEnum;
}) => {
  const router = useRouter();

  const initValue = (router.query[field] as string) || "";
  const lastValueRef = useRef(initValue);
  const [searchInputValue, setSearchInputValue] = useState(initValue);

  const [debouncedSearchInputValue] = useDebounce(searchInputValue, 500);

  useEffect(() => {
    // const handleSearch = () => {
    //   if (lastValueRef.current === debouncedSearchInputValue) return;
    //   router.push({
    //     pathname: pathname,
    //     query: { [field]: debouncedSearchInputValue },
    //   });
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchInputValue, pathname]);

  return {
    setSearchInputValue,
    searchInputValue,
    debouncedSearchInputValue,
  };
};
