import React from "react";

export enum ContentTypeOptions {
  "Fun" = "Fun",
  "Education" = "Education",
  "Sports" = "Sports",
  "News" = "News",
  "Investments" = "Investments",
  "Facts" = "Facts",
}

export interface ContentTypeContextProps {
  topics: ContentTypeOptions[];
  selectedTopic: ContentTypeOptions;
  setSelectedTopic: (topic: ContentTypeOptions) => void;
  options: string[];
}

export interface ContentTypeProviderProps {
  children: React.ReactNode;
}
