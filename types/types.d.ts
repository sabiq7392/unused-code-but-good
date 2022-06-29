import type { ReactNode } from "react";

export type Children = ReactNode | ReactNode[];
import type { FormEvent, ChangeEvent, MouseEvent } from "react";
import DATA_MENU_SIDEBAR from "../data/DATA_MENU_SIDEBAR";

export interface PropsIcon {
  size?: number;
  color?: string;
}

export interface DataAdmin {
  id: number;
  username: string;
  email: string;
  name: string;
  photo: string  | null;
  phone: string | null;
  birthday: string | null;
  status: number;
  topics: string | null;
  is_admin: true;
}

export type DataMenuSidebar = typeof DATA_MENU_SIDEBAR;
export type FormSubmit = FormEvent<HTMLFormElement>;
export type InputChange = ChangeEvent<HTMLInputElement>;
export type ButtonClick = MouseEvent<HTMLButtonElement>;
export type ObjectOfAny = { [key: string]: any };
