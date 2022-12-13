import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const GlobalStyles = createGlobalStyle`
  .slick-dots li {
    width: 100%;
    height: 10px;
  }
  li.slick-active > div{
		background-color: #A127FF;
  } 
  .slick-prev {
    width: 39px;
    height: 39px;
    position: absolute;
    top: 50%;
    left: -39px;
    z-index: 2;
  }
  .slick-next {
    width: 39px;
    height: 39px;
    position: absolute;
    right: -39px;
    top: 50%;
    z-index: 2;
  }
  button.slick-arrow.slick-prev, div.styles__LeftArrow-sc-gziwbd-8.ilDHSB.slick-arrow.slick-prev{
    background-image:  url("./icon/purpleArrowLeft.svg");
    background-size: contain;
    z-index: 9;
  }
  button.slick-arrow.slick-prev.slick-disabled, div.styles__LeftArrow-sc-gziwbd-8.ilDHSB.slick-arrow.slick-prev.slick-disabled{
    background-image:  url("./icon/blueArrowLeft.svg");
    background-size: contain;
    z-index: 9;
  }
  button.slick-arrow.slick-next, div.styles__RightArrow-sc-gziwbd-9.eUCWcC.slick-arrow.slick-next{
    background-image:  url("./icon/purpleArrowRight.svg");
    background-size: contain;
    z-index: 9;
  }
  button.slick-arrow.slick-next.slick-disabled, div.styles__RightArrow-sc-gziwbd-9.eUCWcC.slick-arrow.slick-next.slick-disabled{
    background-image:  url("./icon/blueArrowRight.svg");
    background-size: contain;
    z-index: 9;
  }
  .slick-prev:before, .slick-next:before {
    content: ""
  }
`;

export const Title = styled.p`
  font-size: 2.7rem;
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  color: #fff;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
  @media (min-width: 1024px) {
    font-size: 3.3rem;
  }
  @media (min-width: 1366px) {
    font-size: 4.5rem;
  }
`;

export const Desc = styled.h1`
  font-size: 1.6rem;
  text-align: ${(props) => props.textAlignDesc};
  margin: ${(props) => props.margin};
  color: #9a8dac;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1366px) {
    font-size: 2.8rem;
  }
`;

export const MoreInfs = styled.h2`
  font-size: ${(props) => props.fontSize};
  padding-top: ${(props) => props.paddingTop};
  color: #ffffff;
  margin: 0;
  text-overflow: ${(props) => props.textOverflow};
  overflow: ${(props) => props.overflow};
  display: ${(props) => props.display};
  -webkit-line-clamp: ${(props) => props.wbkLineClamp};
  -webkit-box-orient: ${(props) => props.wbkBoxOrient};
  white-space: ${(props) => props.whiteSpace};
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
    font-size: ${(props) => props.fontSizeLaptop};
    -webkit-line-clamp: ${(props) => props.wbkLineClampLaptop};
  }
  @media (min-width: 1366px) {
    font-size: 2.5rem;
  }
`;

export const TitleInside = styled.div`
  width: 220px;
  font-size: 2.5rem;
  margin: 12px 0;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${(props) => props.cursor};
  /* background: blue; */
  span {
    color: #ffe747;
    font-size: 2.5rem;
    font-weight: bold;
  }
  @media (min-width: 1024px) {
    width: 230px;
    font-size: 2.7rem;
    margin: 0;
    span {
      font-size: 2.7rem;
    }
  }
  @media (min-width: 1366px) {
    width: 250px;
    font-size: 3rem;
    span {
      font-size: 3rem;
    }
  }
`;

export const Icon = styled.div`
  width: ${(props) => props.widthIcon};
  height: ${(props) => props.heightIcon};
  background: #a127ff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 16px; */
  color: #ffffff;
  position: relative;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  @media (min-width: 1024px) {
    width: ${(props) => props.widthIconLaptop};
    height: ${(props) => props.heightIconLaptop};
  }
`;

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#9e9e9e",
    },
  },
});
export function TitleInsideComponent(props) {
  return (
    <TitleInside cursor={props.cursor}>
      Hyper Beam
      <ThemeProvider theme={theme}>
        <FiberManualRecordIcon sx={{ fontSize: "15px", color: "#9e9e9e" }} />
      </ThemeProvider>
      <span>
        {props.number < 10 ? 0 : ""}
        {props.number}
      </span>
    </TitleInside>
  );
}
