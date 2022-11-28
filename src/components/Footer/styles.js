import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 463px;
  background: #1b1b40;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    height: 214px;
    justify-content: space-around;
    flex-direction: row;
  }
`;

export const MainImage = styled.img`
  width: 214px;
  height: 92px;
  background: #fff;
  margin-bottom: 50px;
  @media (min-width: 1024px) {
    width: 290px;
    height: 124px;
    margin-bottom: 0;
  }
`;

export const Contacts = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  @media (min-width: 1024px) {
    align-items: normal;
    margin-bottom: 0;
  }
`;

export const ContactTitle = styled.label`
  font-size: 20px;
  color: #ffffff;
`;

export const IconsRow = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;