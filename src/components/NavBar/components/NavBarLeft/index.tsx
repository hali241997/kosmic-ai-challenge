import { BorderColorOutlined, West } from "@mui/icons-material";
import { Typography, styled, useTheme } from "@mui/material";
import { FC } from "react";
import Col from "../../../common/Col";
import MuiBox from "../../../common/MuiBox";
import Row from "../../../common/Row";

const IconContainer = styled(Col)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: theme.palette.iconBg,
  borderRadius: 12,
}));

const NavBarLeft: FC = () => {
  const theme = useTheme();

  return (
    <MuiBox>
      <Row gap={theme.spacing(8)}>
        <IconContainer>
          <West />
        </IconContainer>

        <Col>
          <Row gap={theme.spacing(5)} alignItems="center">
            <Typography fontWeight="500">Media management</Typography>

            <BorderColorOutlined sx={{ width: 16, height: 16 }} />
          </Row>
          <Typography color={theme.palette.secondary.main}>
            Draft campaign
          </Typography>
        </Col>
      </Row>
    </MuiBox>
  );
};

export default NavBarLeft;
