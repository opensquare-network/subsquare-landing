import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

import Container from "components/container";
import Title from "components/title";
import Card from "./card";
import { EXPLORE_CARDS } from "utils/constants";
import Panel from "./panel";
import { useDisplay, useWindowSize } from "utils/hooks";

const Wrapper = styled.div`
  padding: 80px 0;
  background: #ffffff;
  @media screen and (max-width: 800px) {
    padding: 40px 0;
  }
  > div {
    transition: all 1s ease-in;
    opacity: 0;
    transform: translateY(40px);
  }
  &.display {
    > div {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CardContainer = styled.div`
  position: relative;
`;

const CardWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  margin-top: 40px;
  > * {
    transition: all 0.2s ease-in;
    transform: translateX(${(p) => p.currentIndex * -367}px);
  }
  > :not(:first-child) {
    margin-left: 21px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 24px;
  }
  @media screen and (max-width: 1080px) {
    margin-left: -16px;
    margin-right: -16px;
  }
  @media screen and (max-width: 1200px) {
    overflow-x: scroll;
    > * {
      transition: none;
      transform: translateX(0);
    }
  }
`;

const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 46px;
  height: 46px;
  border: 1px solid #ebeef4;
  box-shadow: 0px 6px 7px rgba(30, 33, 52, 0.02),
    0px 1.34018px 1.56354px rgba(30, 33, 52, 0.0119221),
    0px 0.399006px 0.465507px rgba(30, 33, 52, 0.00807786);
  border-radius: 23px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    box-shadow: 0px 6px 22px rgba(30, 33, 52, 0.11),
      0px 1.34018px 4.91399px rgba(30, 33, 52, 0.0655718),
      0px 0.399006px 1.46302px rgba(30, 33, 52, 0.0444282);
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const LeftArrowButton = styled(ArrowButton)`
  left: -60px;
`;

const RightArrowButton = styled(ArrowButton)`
  right: -60px;
`;

export default function Advantage() {
  const ref = useRef();
  const cardRef = useRef();
  const display = useDisplay(ref);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowSize();

  const onIncrease = (increase) => {
    const target = currentIndex + increase;
    if (target < 0 || target >= EXPLORE_CARDS.length - 2) return;
    setCurrentIndex(target);
  };

  useEffect(() => {
    if (width > 1200) {
      cardRef?.current?.scrollTo(0, 0);
    } else {
      setCurrentIndex(0);
    }
  }, [width]);

  return (
    <Wrapper ref={ref} className={display ? "display" : ""}>
      <Container>
        <Title
          topic="EXPLORE"
          title="Who Uses SubSquare"
          text="Quis curabitur ultricies integer sed mi volutpat. Ullamcorper magna eleifend accumsan."
          color="#4CAF50"
        />
        <CardContainer>
          <CardWrapper currentIndex={currentIndex} ref={cardRef}>
            {(EXPLORE_CARDS || []).map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </CardWrapper>
          <LeftArrowButton onClick={() => onIncrease(-1)}>
            <img src="/imgs/icons/caret-left.svg" alt="" />
          </LeftArrowButton>
          <RightArrowButton onClick={() => onIncrease(1)}>
            <img src="/imgs/icons/caret-right.svg" alt="" />
          </RightArrowButton>
        </CardContainer>
        <Panel />
      </Container>
    </Wrapper>
  );
}
