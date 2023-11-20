import { FC, useCallback, useMemo, useState } from "react";
import { ContentTypeContext } from "./context";
import { FunOptions, options } from "./data";
import { ContentTypeOptions, ContentTypeProviderProps } from "./types";

const ContentTypeProvider: FC<ContentTypeProviderProps> = ({ children }) => {
  const [selectedTopic, setSelectedTopic] = useState<ContentTypeOptions>(
    ContentTypeOptions.Fun
  );
  const [topicOptions, setTopicOptions] = useState<string[]>(FunOptions);

  const updateSelectedTopic = useCallback((topic: ContentTypeOptions) => {
    setSelectedTopic(topic);
    setTopicOptions(options[topic]);
  }, []);

  const topics = useMemo(() => {
    return Object.keys(options).map((option) => {
      return option as ContentTypeOptions;
    });
  }, []);

  return (
    <ContentTypeContext.Provider
      value={{
        topics,
        selectedTopic,
        setSelectedTopic: updateSelectedTopic,
        options: topicOptions,
      }}
    >
      {children}
    </ContentTypeContext.Provider>
  );
};

export default ContentTypeProvider;
