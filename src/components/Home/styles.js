import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  height: 66px;
  margin-bottom: 40px;
  background: #11122d 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 16px #0000004f;
`;

export const Content = styled.div`
  width: 100%;
  height: 600px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

export const Banner = styled.div`
  width: 94.7%;
  height: 488px;
  background: purple;
  border-radius: 44px;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 480px) {
    width: 95%;
    height: 610px;
    flex-direction: column;
  }
`;

export const TextsDiv = styled.div`
  width: 45%;
  height: 40%;
  background: lightblue 0% 0% no-repeat padding-box;;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 34px;
  @media (max-width: 480px) {
    width: 100%;
    border-radius: 44px;
  }
  button {
    width: 17.5%;
    height: 28%;
    background: #ffe747 0% 0% no-repeat padding-box;
    border-radius: 44px;
    border: none;
    color: #a127ff;
    font-size: 21px;
    :hover{
      width: 18%;
      height: 28.5%;
      text-shadow: 0px 3px 6px #FF00C47A;
    }

    @media (max-width: 480px){
      width: 130px;
      height: 49px;
      font-size: 20px;
    }
    // @media (max-width: 1280px) {
    //   font-size: 20px;
    // }
    // @media (max-width: 1080px) {
    //   font-size: 15px;
    // }
  }
`;

export const TitleInside = styled.div`
  font-size: 30px;
  margin: 10px 0;
  width: 32%;
  color: #fff;
  font: Poppins;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: #ffe747;
  }
  div {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: gray;
    opacity: 1;
    margin-top: 5px;
    @media (max-width: 480px) {
      width: 7px;
      height: 7px;
      opacity: 0.6;
    }
  }
  @media (max-width: 480px) {
    width: 62%;
    font-size: 25px;
  }
  // @media (max-width: 1366px) {
  //   width: 45%;
  // }
  // @media (max-width: 1280px) {
  //   font-size: 25px;
  // }
  // @media (max-width: 1080px) {
  //   font-size: 20px;
  // }
`;

export const Desc = styled.p`
  font-size: 25px;
  margin:  0 0 21px 0;
  color: #fff;
  font: Poppins;
  font-weight: bold;
  @media (max-width: 480px) {
    font-size: 21px;
    width: 262px;
  }
  // @media (max-width: 1280px) {
  //   font-size: 20px;
  // }
  // @media (max-width: 1080px) {
  //   font-size: 15px;
  // }
`;

export const BigImg = styled.img`
  width: 35%;
  position: absolute;
  background: yellow;
  height: 513px;
  right: 80px;
  bottom: 0;
  @media (max-width: 480px) {
    width: 329px;
    height: 317px;
    right: 14px;
  }
`;

export const HyperCards = styled.div`
  width: 85%;
  height: auto;
  position: absolute;
  bottom: -30%;
  display: flex;
  background: blue;
  justify-content: space-between;
  bottom: -165px;
  left: 7.5%;
  @media (max-width: 1080px) {
    bottom: -20%;
  }
`;

export const HyperCardGroup = styled.div`
  width: 15%;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: green;
  // @media (max-width: 1510px) {
  // }
  // @media (max-width: 1280px) {
  // }
  // @media (max-width: 1080px) {
  //   height: 120px;
  // }
  // @media (max-width: 925px) {
  // }
  // @media (max-width: 760px) {
  // }
`;

export const HyperText = styled.label`
  width: 70%;
  font-size: 17px;
  color: #9a8dac;
  @media (max-width: 1280px) {
    font-size: 12px;
  }
  @media (max-width: 1080px) {
    font-size: 10px;
  }
`;

export const Carousel = styled.div`
  width: 1500px;
  height: 370px;
  background: green;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;