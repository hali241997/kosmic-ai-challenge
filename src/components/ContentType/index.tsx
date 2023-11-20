"use client";
import { useContentType } from "@/providers/ContentTypeProvider/hook";
import { ContentTypeOptions } from "@/providers/ContentTypeProvider/types";
import { Chip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC, useCallback } from "react";
import Col from "../common/Col";
import Row from "../common/Row";

const ContentType: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const content = useContentType();

  const updateSelectedTopic = useCallback(
    (topic: ContentTypeOptions) => {
      content?.setSelectedTopic(topic);
    },
    [content]
  );

  return (
    <Col gap={theme.spacing(12)} mb={theme.spacing(16)}>
      <Typography fontSize={matches ? 16 : 18} fontWeight="500">
        What type of content are you creating?
      </Typography>

      <Row gap={matches ? theme.spacing(1) : theme.spacing(6)} flexWrap="wrap">
        {content?.topics.map((option) => {
          return (
            <Chip
              key={option}
              label={option}
              variant={content.selectedTopic === option ? "filled" : "outlined"}
              clickable
              onClick={() => updateSelectedTopic(option)}
            />
          );
        })}
      </Row>
    </Col>
  );
};

export default ContentType;
