import styled from "styled-components";

import Container from "components/container";
import ExternalLink from "components/externalLink";

const Wrapper = styled.footer`
  border-top: 1px solid #ebeef4;
  background: #ffffff;
  position: relative;
`;

const TopWrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > :first-child {
    display: flex;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #506176;
    > :not(:first-child) {
      margin-left: 24px;
    }
  }
  > :last-child {
    display: flex;
    > :not(:first-child) {
      margin-left: 8px;
    }
  }
`;

const BottomWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  > :first-child {
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #506176;
  }
  > :last-child {
    margin-left: 16px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #9da9bb;
    > :not(:first-child) {
      margin-left: 16px;
    }
  }
  @media screen and (max-width: 800px) {
    position: static;
    padding: 16px 0;
    transform: none;
    flex-direction: column;
    > :last-child {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <TopWrapper>
          <div>
            <ExternalLink href="/">Terms</ExternalLink>
            <ExternalLink href="/">Privacy</ExternalLink>
          </div>
          <div>
            <ExternalLink href="mailto:hi@opensquare.network">
              <img src="/imgs/icons/mail.svg" alt="" />
            </ExternalLink>
            <ExternalLink href="https://app.element.io/#/room/#opensquare:matrix.org">
              <img src="/imgs/icons/element.svg" alt="" />
            </ExternalLink>
          </div>
        </TopWrapper>
        <BottomWrapper>
          <div>© 2022 SubSquare</div>
          <div>
            <div>Powered by</div>
            <img src="/imgs/logo-opensquare.svg" alt="" />
          </div>
        </BottomWrapper>
      </Container>
    </Wrapper>
  );
}
