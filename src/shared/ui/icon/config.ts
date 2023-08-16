import * as icons from "./assets";

export const configIcons = {
  "arrow-chevron-bottom": icons.ArrowChevronBottom,
  "arrow-chevron-left": icons.ArrowChevronLeft,
  "arrow-chevron-right": icons.ArrowChevronRight,
  "arrow-chevron-top": icons.ArrowChevronTop,
  close: icons.Close,
  plus: icons.Plus,
  question: icons.Question,
  calendar: icons.Calendar
};
export type IconKeys = keyof typeof configIcons;
