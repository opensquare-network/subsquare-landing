import styled from "styled-components";

const Wrapper = styled.div`
  background: #1e2134;
  padding: 40px 24px;
  > :not(:first-child) {
    margin-top: 24px;
  }
  @media screen and (max-width: 800px) {
    padding: 24px 12px;
    > :not(:first-child) {
      margin-top: 16px;
    }
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.16em;
  color: #ffffff;
  text-transform: uppercase;
`;

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > * {
    margin: 0 20px;
  }
  @media screen and (max-width: 800px) {
    > * {
      margin: 0 10px;
    }
  }
`;

export default function Partner() {
  return (
    <Wrapper>
      <Title>Trusted By the Best ProJect</Title>
      <ProjectWrapper>
        <img src="/imgs/icons/project-khala.svg" alt="" />
        <img src="/imgs/icons/project-acala.svg" alt="" />
        <img src="/imgs/icons/project-karura.svg" alt="" />
        <img src="/imgs/icons/project-bifrost.svg" alt="" />
        <img src="/imgs/icons/project-kintsugi.svg" alt="" />
      </ProjectWrapper>
    </Wrapper>
  );
}
