import {
  Link,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import Col from "../../../common/Col";
import Row from "../../../common/Row";

const StyledImage = styled("img")(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: theme.spacing(6),
}));

const NavBarRight: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Row gap={theme.spacing(6)} alignItems="center">
      {!matches && (
        <Col alignItems="flex-end">
          <Typography>Jane Cooper</Typography>
          <Link color={theme.palette.tertiary.main}>Change Profile</Link>
        </Col>
      )}

      <StyledImage src="https://dummyimage.com/40x40" alt="avatar" />
    </Row>
  );
};

export default NavBarRight;
