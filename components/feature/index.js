import styled from "styled-components";
import { useState, Fragment, useRef } from "react";

import Title from "components/title";
import Tab from "./tab";
import Container from "components/container";
import { FEATURE_TABS } from "utils/constants";
import { useDisplay } from "utils/hooks";

const Wrapper = styled.div`
    padding: 80px 0 60px;
    @media screen and (max-width: 800px) {
        padding: 40px 0 30px;
    }

    > div {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s ease-out;
    }

    &.display {
        > div {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 40px;
`;

const LeftWrapper = styled.div`
    flex: 0 0 344px;
    @media screen and (max-width: 800px) {
        flex: 1 1 auto;
    }
`;

const ImgTab = styled.div`
    display: none;
    line-height: 0;
    margin: 16px 0 24px;
    box-shadow: 0px 6px 7px rgba(30, 33, 52, 0.02),
    0px 1.34018px 1.56354px rgba(30, 33, 52, 0.0119221),
    0px 0.399006px 0.465507px rgba(30, 33, 52, 0.00807786);
    border-radius: 6px;

    > img {
        width: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 800px) {
        display: block;
    }
`;

const RightWrapper = styled.div`
    flex-grow: 1;
    margin-left: 24px;
    line-height: 0;
    position: relative;

    > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        transform: translateY(20px);

        &.display {
            transition: all 0.5s ease-out;
            position: static;
            display: block;
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export default function Feature() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef();
  const display = useDisplay(ref);

  return (
    <Wrapper ref={ref} className={display ? "display" : ""}>
      <Container>
        <Title
          topic="TOP FEATURES"
          title="Where Governance Starts"
          text="Rich features to help users examine governance data, vote on referenda, and manage the treasury."
          color="#4CAF50"
        />
        <ContentWrapper>
          <LeftWrapper>
            {(FEATURE_TABS || []).map((item, index) => (
              <Fragment key={index}>
                <Tab
                  title={item.title}
                  items={item.items}
                  active={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
                <ImgTab>
                  <img src={`/imgs/feature-img-${index + 1}.png`} alt="" />
                </ImgTab>
              </Fragment>
            ))}
          </LeftWrapper>
          <RightWrapper>
            {
              <img
                className={activeIndex === 0 ? "display" : ""}
                src="/imgs/feature-img-1.png"
                alt=""
              />
            }
            {
              <img
                className={activeIndex === 1 ? "display" : ""}
                src="/imgs/feature-img-2.png"
                alt=""
              />
            }
          </RightWrapper>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
}
