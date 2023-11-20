import SliderThumb from "@/Icons/SliderThumb";
import {
  Chip,
  Slider,
  Typography,
  sliderClasses,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, useCallback, useState } from "react";
import Col from "../common/Col";
import Row from "../common/Row";

const StyledRow = styled(Row)(({ theme }) => ({
  maxWidth: 380,
  backgroundColor: theme.palette.bottomNav,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 12,
  paddingLeft: theme.spacing(7),
  paddingRight: theme.spacing(7),
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(6),
  gap: theme.spacing(5),
  position: "relative",
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  color: theme.palette.dividerColor,
  [`& .${sliderClasses.track}`]: {
    backgroundImage: `linear-gradient(to right, #523FD7, ${theme.palette.tertiary.main})`,
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  position: "absolute",
  height: 21,
  top: -10,
  padding: theme.spacing(2),
  borderRadius: 12,
}));

const CustomSlideThumb = (props: any) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const leftNum = props.style.left.split("%")[0] as number;

  return (
    <Col
      sx={{
        position: "absolute",
        left: `${leftNum - 3}%`,
        top: matches ? 14 : 7,
        pointerEvents: "all",
      }}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
    >
      <SliderThumb />
      {props.children}
    </Col>
  );
};

const OutputTextLength: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [progressValue, setProgressValue] = useState<number>(700);

  const handleSliderOnChange = useCallback(
    (_event: Event, value: number | number[]) => {
      setProgressValue(value as number);
    },
    []
  );

  return (
    <Col gap={matches ? theme.spacing(15) : theme.spacing(18)}>
      <Typography fontSize={matches ? 16 : 18} fontWeight="500">
        Set the number of words for output text.
      </Typography>

      <StyledRow>
        <Typography fontSize={matches ? 12 : 14} fontWeight="500">
          100
        </Typography>

        <StyledSlider
          value={progressValue}
          onChange={handleSliderOnChange}
          components={{ Thumb: CustomSlideThumb }}
          min={100}
          max={1000}
        />

        <Typography fontSize={matches ? 12 : 14} fontWeight="500">
          1000
        </Typography>

        <StyledChip variant="filled" label={progressValue} />
      </StyledRow>
    </Col>
  );
};

export default OutputTextLength;
