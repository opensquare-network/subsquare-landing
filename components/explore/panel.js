import styled from "styled-components";

import Button from "components/button";

const Wrapper = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  border: 1px solid #ebeef4;
  filter: drop-shadow(0px 6px 7px rgba(30, 33, 52, 0.02))
    drop-shadow(0px 1.34018px 1.56354px rgba(30, 33, 52, 0.0119221))
    drop-shadow(0px 0.399006px 0.465507px rgba(30, 33, 52, 0.00807786));
  border-radius: 6px;
  padding: 60px 24px;
  background-image: url("/imgs/explore-bg.svg");
  background-position: center;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > :not(:first-child) {
    margin-top: 16px;
  }
  > :nth-child(2) {
    font-weight: bold;
    font-size: 32px;
    line-height: 140%;
    max-width: 340px;
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    margin-top: 40px;
    padding: 40px 16px;
    > :nth-child(2) {
      font-size: 20px;
      max-width: 220px;
    }
  }
`;

export default function Panel() {
  return (
    <Wrapper>
      <img src="/imgs/logo-img.svg" alt="" />
      <div>Integrate Your Project to SubSquare</div>
      <Button>Contact Us</Button>
    </Wrapper>
  );
}
