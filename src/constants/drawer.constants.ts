import { BBookIcon } from "@/assets/icons/BBookIcon";
import { RoutesEnum } from "@/core/enums/routes.enums";
import { BExchangeBook } from "@/assets/icons/BExchangeBook";
import { BYourBookIcon } from "@/assets/icons/BYourBookIcon";

export interface IDrawerItems {
  text: string;
  Icon?: any;
  href?: RoutesEnum;
}

export interface IDrawerSection {
  data: IDrawerItems;
  items: IDrawerItems[];
}

type IDrawerItemsMap = Record<string, IDrawerItems>;

export const drawerMap: IDrawerItemsMap = {
  [RoutesEnum.WELCOME_PAGE]: {
    text: "Livros para Troca",
    Icon: BBookIcon,
    href: RoutesEnum.WELCOME_PAGE,
  },
  [RoutesEnum.YOUR_BOOKS]: {
    text: "Seus Livros",
    Icon: BYourBookIcon,
    href: RoutesEnum.YOUR_BOOKS,
  },
  [RoutesEnum.EXCHANGE_BOOKS]: {
    text: "Suas Trocas",
    Icon: BExchangeBook,
    href: RoutesEnum.EXCHANGE_BOOKS,
  },
};

const general: IDrawerSection = {
  data: {
    text: "Livros",
  },
  items: [
    drawerMap[RoutesEnum.WELCOME_PAGE],
    drawerMap[RoutesEnum.YOUR_BOOKS],
    drawerMap[RoutesEnum.EXCHANGE_BOOKS],
  ],
};

export const sectionsDrawer = [general];
