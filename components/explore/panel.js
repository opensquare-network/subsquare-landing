import styled from "styled-components";

import Button from "components/button";

const Wrapper = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  border: 1px solid #ebeef4;
  filter: drop-shadow(0px 6px 7px rgba(30, 33, 52, 0.02))
    drop-shadow(0px 1.34018px 1.56354px rgba(30, 33, 52, 0.0119221))
    drop-shadow(0px 0.399006px 0.465507px rgba(30, 33, 52, 0.00807786));
  border-radius: 6px;
  padding: 48px 24px;
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
    font-size: 20px;
    line-height: 140%;
    max-width: 300px;
    text-align: center;
  }
  > :nth-child(3) {
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: #9da9bb;
    max-width: 480px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 40px;
    padding: 40px 16px;
  }
`;

export default function Panel() {
  return (
    <Wrapper>
      <img src="/imgs/logo-img.svg" alt="" />
      <div>Deploy Substrate to Project Based on Substrate</div>
      <div>
        Join thousands of people deploying hundreds of thousands of applications
        effortlessly on Railway
      </div>
      <Button>Contact Us</Button>
    </Wrapper>
  );
}
