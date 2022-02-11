import styled from "styled-components";

import Container from "components/container";
import Launch from "./launch";
import Sider from "./sider";
import { useScrollPosition } from "utils/hooks";

const Wrapper = styled.header`
  z-index: 2;
  background: #ffffff;
  border-bottom: 1px solid #ebeef4;
  height: 64px;
  position: fixed;
  width: 100%;
  &.shadow {
    box-shadow: 0px 6px 7px rgba(30, 33, 52, 0.02),
      0px 1.34018px 1.56354px rgba(30, 33, 52, 0.0119221),
      0px 0.399006px 0.465507px rgba(30, 33, 52, 0.00807786);
  }
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
  const position = useScrollPosition();

  return (
    <Wrapper className={position > 0 ? "shadow" : ""}>
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
