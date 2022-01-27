import styled from "styled-components";

import Container from "components/container";
import Title from "components/title";

const Wrapper = styled.div`
  padding: 60px 0 80px;
  @media screen and (max-width: 800px) {
    padding: 30px 0 40px;
  }
`;

export default function Advantage() {
  return (
    <Wrapper>
      <Container>
        <Title
          topic="ADVANTAGES"
          title="The Better Experience"
          text="Quis curabitur ultricies integer sed mi volutpat. Ullamcorper magna eleifend accumsan. "
          color="#6848FF"
        />
      </Container>
    </Wrapper>
  );
}
