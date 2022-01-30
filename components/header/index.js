import styled from "styled-components";

import Container from "components/container";
import Launch from "./launch";
import Sider from "./sider";

const Wrapper = styled.header`
  z-index: 2;
  background: #ffffff;
  border-bottom: 1px solid #ebeef4;
  height: 64px;
  position: fixed;
  width: 100%;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  background: url("/imgs/logo.svg");
  width: 161px;
  height: 64px;
`;

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Logo />
          <Launch />
          <Sider />
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
}
