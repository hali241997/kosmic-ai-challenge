import { useContext } from "react";
import { ContentTypeContext } from "./context";

export const useContentType = () => useContext(ContentTypeContext);
