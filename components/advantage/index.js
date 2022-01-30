import styled from "styled-components";
import { useRef } from "react";

import Container from "components/container";
import Title from "components/title";
import Card from "./card";
import { ADVANTAGE_TOP_CARDS, ADVANTAGE_BOTTOM_CARDS } from "utils/constants";
import { useDisplay } from "utils/hooks";

const Wrapper = styled.div`
  padding: 60px 0 80px;
  @media screen and (max-width: 800px) {
    padding: 30px 0 40px;
  }
  > div {
    transition: all 1s linear;
    opacity: 0;
    transform: translateY(20px);
  }
  &.display {
    > div {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  > :not(:first-child) {
    margin-left: 24px;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    > :not(:first-child) {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

const BottomCardWrapper = styled(CardWrapper)`
  margin-top: 24px;
  @media screen and (max-width: 800px) {
    margin-top: 16px;
  }
`;

export default function Advantage() {
  const ref = useRef();
  const display = useDisplay(ref);

  return (
    <Wrapper ref={ref} className={display ? "display" : ""}>
      <Container>
        <Title
          topic="ADVANTAGES"
          title="The Better Experience"
          text="Quis curabitur ultricies integer sed mi volutpat. Ullamcorper magna eleifend accumsan."
          color="#6848FF"
        />
        <CardWrapper>
          {(ADVANTAGE_TOP_CARDS || []).map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </CardWrapper>
        <BottomCardWrapper>
          {(ADVANTAGE_BOTTOM_CARDS || []).map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </BottomCardWrapper>
      </Container>
    </Wrapper>
  );
}
