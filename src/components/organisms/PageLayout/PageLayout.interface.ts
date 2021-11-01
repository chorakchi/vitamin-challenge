import { HTMLAttributes } from "react";
export interface PageLayoutProps
  extends HTMLAttributes<HTMLElement> {
  title?: string;
  description?: any;
  onChangeRoute?: (path: string) => void;
  currentPath?: string;
}
