import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: yellow;
  margin-top: 54px;
`;

export const CommentBox = styled.div`
  width: 85%;
  height: 80%;
  background: red;
  font-size: 150px;
  color: #fff;
  @media (max-width: 480px) {
    font-size: 45px;
  }
`;