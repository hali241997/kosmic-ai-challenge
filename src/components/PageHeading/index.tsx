"use client";
import {
  Divider,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import Col from "../common/Col";

const StyledCol = styled(Col)(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  gap: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(10),
  },
}));

const PageHeading: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Col sx={{ marginBottom: matches ? theme.spacing(12) : theme.spacing(20) }}>
      <StyledCol>
        <Typography fontSize={matches ? 20 : 24} fontWeight="500">
          Content type
        </Typography>
        <Typography color={theme.palette.secondary.main}>
          Choose a content type that best fits your needs.
        </Typography>
      </StyledCol>

      <Divider />
    </Col>
  );
};

export default PageHeading;
