import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  > :first-child {
    font-weight: bold;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${(p) => p.color};
  }
  > :nth-child(2) {
    font-weight: bold;
    font-size: 32px;
    line-height: 100%;
  }
  > :nth-child(3) {
    font-size: 16px;
    line-height: 140%;
    color: #9da9bb;
    max-width: 480px;
    margin: 0 auto;
  }
  > :not(:first-child) {
    margin-top: 24px;
  }
  @media screen and (max-width: 800px) {
    > :nth-child(2) {
      font-size: 20px;
    }
    > :nth-child(3) {
      font-size: 14px;
      max-width: 380px;
    }
    > :not(:first-child) {
      margin-top: 16px;
    }
  }
`;

export default function Title({ topic, title, text, color }) {
  return (
    <Wrapper color={color}>
      <div>{topic}</div>
      <div>{title}</div>
      <div>{text}</div>
    </Wrapper>
  );
}
