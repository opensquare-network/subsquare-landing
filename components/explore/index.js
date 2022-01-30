import styled from "styled-components";
import { useRef } from "react";

import Container from "components/container";
import Title from "components/title";
import Card from "./card";
import { EXPLORE_CARDS } from "utils/constants";
import Panel from "./panel";
import { useDisplay } from "utils/hooks";

const Wrapper = styled.div`
  padding: 80px 0;
  background: #ffffff;
  @media screen and (max-width: 800px) {
    padding: 40px 0;
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
  display: flex;
  overflow-x: auto;
  margin-top: 40px;
  > :not(:first-child) {
    margin-left: 24px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 24px;
  }
`;

export default function Advantage() {
  const ref = useRef();
  const display = useDisplay(ref);

  return (
    <Wrapper ref={ref} className={display ? "display" : ""}>
      <Container>
        <Title
          topic="EXPLORE"
          title="Who Uses SubSquare"
          text="Quis curabitur ultricies integer sed mi volutpat. Ullamcorper magna eleifend accumsan."
          color="#4CAF50"
        />
        <CardWrapper>
          {(EXPLORE_CARDS || []).map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </CardWrapper>
        <Panel />
      </Container>
    </Wrapper>
  );
}
