import { TMargin } from "src/shared/types";

export type TInput = TMargin & {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}