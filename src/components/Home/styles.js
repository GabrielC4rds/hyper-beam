import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 610px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  @media (min-width: 768px) {
    height: 692px;
    margin-top: 90px;
  }
  @media (min-width: 1024px) {
    height: 488px;
    margin-top: 100px;
  }
  @media (min-width: 1366px) {
    height: 520px;
  }
`;

export const Banner = styled.div`
  width: 95%;
  height: 610px;
  flex-direction: column;
  background-color: #a57bca;
  background-image: ${(props) => props.image};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  background-position: center;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 91%;
    height: 692px;
  }
  @media (min-width: 1024px) {
    width: 95%;
    height: 488px;
    justify-content: space-between;
    flex-direction: row;
  }
  @media (min-width: 1366px) {
    height: 520px;
  }
`;

export const OverlayDiv = styled.div`
  width: 100%;
  height: 610px;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 35%
  );
  border-radius: 30px;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 60px;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 692px;
  }
  @media (min-width: 1024px) {
    height: 488px;
    justify-content: space-between;
    flex-direction: row;
  }
  @media (min-width: 1366px) {
    height: 520px;
  }
`;

export const FeaturedPodcastInfo = styled.div`
  width: 100%;
  height: 201px;
  display: flex;
  flex-direction: column;
  padding: 0 34px;
  @media (min-width: 768px) {
    padding: 0 117px;
    position: absolute;
    top: 10px;
  }
  @media (min-width: 1024px) {
    padding: 0 34px;
    width: 45%;
    top: 25%;
  }
`;

export const PlayButton = styled.button`
  width: 130px;
  height: 49px;
  font-size: 2rem;
  background: #ffe747;
  border-radius: 44px;
  border: none;
  color: #a127ff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 1s;
  transition: text-shadow 1s;
  :hover {
    text-shadow: 0px 3px 6px #ff00c47a;
    transform: scale(1.03);
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const PodcastTheme = styled.p`
  font-size: 2.1rem;
  margin: 0 0 21px 0;
  color: #fff;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.3rem;
  }
  @media (min-width: 1366px) {
    font-size: 2.5rem;
  }
`;

export const BigImg = styled.div`
  width: 332px;
  height: 317px;
  position: absolute;
  background-image: ${(props) => props.image};
  background-size: cover;
  background-repeat: no-repeat;
  bottom: 0;
  cursor: initial;
  @media (min-width: 768px) {
    width: 494px;
    height: 470px;
    max-width: 540px;
  }
  @media (min-width: 1024px) {
    right: 80px;
    width: 394px;
    height: 375px;
  }
  @media (min-width: 1440px) {
    width: 539px;
    height: 513px;
  }
`;
