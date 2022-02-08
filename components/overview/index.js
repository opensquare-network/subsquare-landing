import styled from "styled-components";

import Button from "components/button";

const Wrapper = styled.div`
  background-image: url("/imgs/overview-bg.svg");
  background-position: ;
  background-position: bottom;
  padding: 80px 16px 0;
`;

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  > :not(:first-child) {
    margin-top: 24px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 64px;
  line-height: 120%;
  text-align: center;
  span {
    color: #6848ff;
    animation: "blinker" 1.5s infinite;
    margin-left: 8px;
  }
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
  @media screen and (max-width: 800px) {
    font-size: 48px;
  }
  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
`;

const Text = styled.div`
  max-width: 300px;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #9da9bb;
`;

const ImageWrapper = styled.div`
  width: fit-content;
  margin: 40px auto 0;
  border: 1px solid #ebeef4;
  border-radius: 20px 20px 0px 0px;
  overflow: hidden;
  max-width: 100%;
  line-height: 0;
  box-shadow: 0px 6px 22px rgba(30, 33, 52, 0.11),
    0px 1.34018px 4.91399px rgba(30, 33, 52, 0.0655718),
    0px 0.399006px 1.46302px rgba(30, 33, 52, 0.0444282);
  > img {
    width: 100%;
    max-width: 960px;
  }
`;

export default function Overview() {
  return (
    <Wrapper>
      <Content>
        <Title>
          <div>Empower the Governance</div>
          <div>
            of Substrate<span>_</span>
          </div>
        </Title>
        <Text>
          Strapi is the leading open-source headless CMS. It’s 100% JavaScript,
          fully customizable and developer-first.
        </Text>
        <Button>Get the SubSqaure</Button>
      </Content>
      <ImageWrapper>
        <img src="/imgs/overview-img.png" alt="" />
      </ImageWrapper>
    </Wrapper>
  );
}
