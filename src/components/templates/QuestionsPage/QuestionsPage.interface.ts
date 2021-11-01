import { HTMLAttributes } from "react";

export interface QuestionsPageProps extends HTMLAttributes<HTMLElement> {
  data: any;
  title: string;
  description: string;
}
