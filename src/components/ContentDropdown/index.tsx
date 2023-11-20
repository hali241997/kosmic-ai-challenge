"use client";
import { useContentType } from "@/providers/ContentTypeProvider/hook";
import {
  Autocomplete,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, SyntheticEvent, useCallback } from "react";
import Col from "../common/Col";

const ContentDropdown: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const content = useContentType();

  const logSelectedValue = useCallback(
    (_event: SyntheticEvent<Element, Event>, value: string | null) => {
      console.log({ selectedValue: value });
    },
    []
  );

  return (
    <Col
      gap={matches ? theme.spacing(8) : theme.spacing(12)}
      mb={theme.spacing(16)}
    >
      {content?.selectedTopic && (
        <Typography>
          {`Which type of "${content.selectedTopic}" content do you want to create?`}
        </Typography>
      )}

      {content?.selectedTopic && (
        <Autocomplete
          options={content.options}
          onChange={logSelectedValue}
          renderInput={(params) => (
            <TextField placeholder="Search" {...params} />
          )}
        />
      )}
    </Col>
  );
};

export default ContentDropdown;
