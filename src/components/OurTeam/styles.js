import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 650px;
  background: #1b1b36;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding-top: 20px;
    height: 685px;
  }
  @media (min-width: 1024px) {
    height: 620px;
    padding-top: 0;
  }
  @media (min-width: 1366px) {
    height: 740px;
  }
`;

export const GroupText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GlobalPeoples = styled.div`
  width: 68%;
  max-width: 253px;
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 80px;
  position: relative;
  @media (min-width: 1024px) {
    width: 986px;
    max-width: 986px;
    height: 418px;
    margin-bottom: 0;
    margin-top: 50px;
  }
  @media (max-width: 1175px) {
    width: 100%;
    max-width: 655px;
    height: 384px;
  }
  @media (max-width: 768px) {
    width: 281px;
    height: auto;
  }
`;

export const Peoples = styled.div`
  width: 100%;
  height: 370px;
  display: flex !important;
  align-items: center;
  flex-direction: column;
`;

export const CardsOurTeam = styled.div`
  width: 253px;
  height: 253px;
  max-width: 253px;
  max-height: 253px;
  background-image: ${(props) => props.image};
  background-size: cover;
  position: absolute;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin-bottom: 20px;
  @media (min-width: 1175px) {
    width: 100%;
    height: 254px;
    max-width: 254px;
    max-height: 254px;
    :hover {
      width: 293px;
      height: 293px;
      background-image: ${(props) => props.imageHover};
      animation: fadeIn 1.5s;
      -webkit-animation: fadeIn 1.5s;
      -moz-animation: fadeIn 1.5s;
      -o-animation: fadeIn 1.5s;
      -ms-animation: fadeIn 1.5s;
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
  @media (min-width: 1645px) {
    width: 100%;
    height: 285px;
    max-width: 285px;
    max-height: 285px;
    :hover {
      width: 293px;
      height: 293px;
    }
  }
`;

export const CardsOurTeamHover = styled.div`
  width: 253px;
  height: 253px;
  max-width: 253px;
  max-height: 253px;
  background-image: ${(props) => props.image};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin-bottom: 20px;
  @media (min-width: 1175px) {
    width: 100%;
    height: 254px;
    max-width: 254px;
    max-height: 254px;
    :hover {
      width: 293px;
      height: 293px;
      background-image: ${(props) => props.imageHover};
      animation: fadeIn 1.5s;
      -webkit-animation: fadeIn 1.5s;
      -moz-animation: fadeIn 1.5s;
      -o-animation: fadeIn 1.5s;
      -ms-animation: fadeIn 1.5s;
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
  @media (min-width: 1645px) {
    width: 100%;
    height: 285px;
    max-width: 285px;
    max-height: 285px;
    :hover {
      width: 293px;
      height: 293px;
    }
  }
`;

export const CastersBox = styled.div`
  width: 253px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1175px) {
    width: 254px;
  }
  @media (min-width: 1645px) {
    width: 285px;
  }
`;

export const NameCasters = styled.label`
  font-size: 23px;
  color: #fff;
  span {
    font-size: 23px;
    color: #ffe747;
  }
  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const FuncCasters = styled.label`
  font-size: 20px;
  color: #9a8dac;
  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const LeftArrow = styled.div`
  height: 39px;
  width: 39px;
  position: relative;
  top: 433px;
  left: 86px;
  z-index: 2;
  background-image: url("./icon/purpleArrowLeft.svg");
  :hover {
    background-image: url("./icon/purpleArrowLeft.svg");
  }
  @media (min-width: 769px) {
    top: 433px;
    left: 263px;
  }
  @media (min-width: 1024px) {
    top: 186px;
    left: -40px;
  }
  @media (min-width: 1176px) {
    top: 186px;
    left: -40px;
  }
`;

export const RightArrow = styled.div`
  height: 39px;
  width: 39px;
  position: relative;
  top: 24px;
  left: 157px;
  z-index: 2;
  background-image: url("./icon/purpleArrowRight.svg");
  :hover {
    background-image: url("./icon/purpleArrowRight.svg");
  }
  .disabled {
    background-image: none;
  }
  @media (min-width: 769px) {
    top: 24px;
    left: 354px;
  }
  @media (min-width: 1024px) {
    top: -223px;
    left: 655px;
  }
  @media (min-width: 1176px) {
    left: 986px;
  }
`;
