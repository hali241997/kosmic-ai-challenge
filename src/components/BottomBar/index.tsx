import { FC } from "react";
import Row from "../common/Row";
import {
  Button,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { KeyboardDoubleArrowRightOutlined } from "@mui/icons-material";
import Next from "@/Icons/Next";

const StyledRow = styled(Row)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: "space-between",
  borderTop: `1px solid ${theme.palette.dividerColor}`,
  backgroundColor: theme.palette.bottomNav,
  padding: theme.spacing(16),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: theme.spacing(12),
    gap: theme.spacing(8),
    borderTop: 0,
  },
}));

const StyledBackButton = styled(Button)(({ theme }) => ({
  width: 146,
  height: 52,
  borderRadius: 32,
  border: `1px solid ${theme.palette.dividerColor}`,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const StyledNextButton = styled(Button)(({ theme }) => ({
  width: 234,
  height: 52,
  borderRadius: 32,
  paddingLeft: theme.spacing(16),
  paddingRight: theme.spacing(16),
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    justifyContent: "center",
  },
}));

const LinearGradientText = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(90deg, #523FD7 -20.19%, #FF7DFF 168.46%)",
  WebkitBackgroundClip: "text",
  color: "transparent",
}));

const BottomBar: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledRow>
      <StyledBackButton variant="outlined">Back</StyledBackButton>

      <StyledNextButton variant="contained">
        {matches && <LinearGradientText>Next</LinearGradientText>}

        {!matches && (
          <>
            <LinearGradientText>Next</LinearGradientText>
            <Next />
          </>
        )}
      </StyledNextButton>
    </StyledRow>
  );
};

export default BottomBar;
