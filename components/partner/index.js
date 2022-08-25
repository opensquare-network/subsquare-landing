import styled from "styled-components";

import ExternalLink from "components/externalLink";
import { PARTNERS } from "utils/constants";

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
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  gap: 24px 40px;
  > * {
    opacity: 0.4;
    :hover {
      opacity: 0.6;
    }
  }
  img {
    width: 130px;
    height: 40px;
  }
  @media screen and (max-width: 800px) {
    > * {
      margin: 0 10px;
    }
    img {
      width: 104px;
      height: 32px;
    }
  }
`;

export default function Partner() {
  return (
    <Wrapper>
      <Title>Trusted By the Best Projects</Title>
      <ProjectWrapper>
        {PARTNERS.map((item, index) => (
          <ExternalLink href={item.url} key={index}>
            <img src={`/imgs/icons/${item.icon}`} alt="" />
          </ExternalLink>
        ))}
      </ProjectWrapper>
    </Wrapper>
  );
}
