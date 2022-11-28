import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 1350px;
  /* background: green; */
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
  @media (min-width: 769px) {
    height: 624px;
  }
  @media (min-width: 1024px) {
    height: 716px;
    justify-content: space-around;
  }
`;

export const GroupText = styled.div`
  width: 100%;
  height: auto;
  /* background: pink; */
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
  }
`;

export const GlobalPeoples = styled.div`
  width: 68%;
  max-width: 253px;
  height: 1100px;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  @media (min-width: 1024px) {
    width: 986px;
    max-width: 986px;
    height: 370px;
  }
  @media (max-width: 1175px) {
    width: 100%;
    max-width: 655px;
    height: 370px;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 253px;
    height: auto;
  }
`;

export const Teste = styled.div`
  width: 100%;
  height: 370px;
  /* background: green; */
  display: flex !important;
  align-items: center;
  flex-direction: column;
 
`;

export const CardsOurTeam = styled.div`
  width: 253px;
  height: 253px;
  max-width: 253px;
  max-height: 253px;
  background: #9697c7;
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
      background: yellow;
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
      background: yellow;
    }
  }
`;

export const CastersBox = styled.div`
  width: 253px;
  display: flex;
  /* background: green; */
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
  @media (min-width: 1024px) {
  }
`;

export const FuncCasters = styled.label`
  font-size: 20px;
  color: #9a8dac;
`;

export const LeftArrow = styled.img`
  height: 39px;
  width: 39px;
  position: relative;
  top: 1111px;
  left: 50px;
  z-index: 2;
  @media (min-width: 769px) {
    top: 414px;
    left: 257px;
  }
  @media (min-width: 1024px) {
    position: absolute;
    top: 50%;
    left: -3.7vw;
  }
  @media (min-width: 1176px) {
    position: absolute;
    left: -39px;
    top: 50%;
  }
`;

export const RightArrow = styled.img`
  height: 39px;
  width: 39px;
  position: relative;
  top: 59px;
  left: 160px;
  z-index: 2;
  @media (min-width: 769px) {
    top: 25px;
    left: 350px;
  }
  @media (min-width: 1024px) {
    position: absolute;
    left: 656px;
    top: 50%;
  }
  @media (min-width: 1176px) {
    position: absolute;
    left: 986px;
    top: 50%;
  }
`;
