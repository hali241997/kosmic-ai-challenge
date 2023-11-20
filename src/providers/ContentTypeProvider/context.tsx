import { createContext } from "react";
import { ContentTypeContextProps } from "./types";

export const ContentTypeContext = createContext<ContentTypeContextProps | null>(
  null
);
