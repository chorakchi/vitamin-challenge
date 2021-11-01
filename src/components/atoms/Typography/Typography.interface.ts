import { HTMLAttributes } from "react";

export type variant =
  | "headline_xxl"
  | "headline_xl"
  | "headline_l"
  | "headline_m"
  | "headline_s"
  | "headline_xs"
  | "body"
  | "caption"
  | "inherit";
export type componentEnum =
  | "a"
  | "button"
  | "div"
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "li";
export type align = "inherit" | "left" | "center" | "right" | "justify";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /** @default false */
  bold?: boolean;
  /**
   * Applies the theme typography styles.
   */
  /** @default 'body' */
  variant?: variant;
  /**
   * If true, the text will have a bottom margin.
   */
  gutterBottom?: boolean;

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: componentEnum;
  as?: any;
  href?: string;
  /**
   * it's for time using this component as label of input.
   */
  htmlFor?: string;
}
