import styled from "styled-components";

import Container from "components/container";
import ExternalLink from "components/externalLink";

const Wrapper = styled.footer`
  border-top: 1px solid #ebeef4;
  background: #ffffff;
  position: relative;
`;

const ContentWrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  > :first-child {
    color: #506176;
  }
  > :nth-child(2) {
    margin-left: 16px;
    color: #9da9bb;
    display: flex;
    align-items: center;
    > :not(:first-child) {
      margin-left: 16px;
    }
  }
  > :last-child {
    display: flex;
    margin-left: auto;
    line-height: 0;
    > :not(:first-child) {
      margin-left: 8px;
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
    padding: 24px 16px;
    > :not(:first-child) {
      margin-top: 16px;
      margin-left: 0;
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <div>© 2022 SubSquare</div>
          <div>
            <div>Powered by</div>
            <img src="/imgs/logo-opensquare.svg" alt="" />
          </div>
          <div>
            <ExternalLink href="mailto:yongfeng@opensquare.network">
              <img src="/imgs/icons/mail.svg" alt="" />
            </ExternalLink>
            <ExternalLink href="https://app.element.io/#/room/#opensquare:matrix.org">
              <img src="/imgs/icons/element.svg" alt="" />
            </ExternalLink>
          </div>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
}
