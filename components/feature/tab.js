import styled, { css } from "styled-components";

import { useWindowSize } from "utils/hooks";

const Wrapper = styled.div`
  border-radius: 6px;
  padding: 24px;
  cursor: pointer;
  ${(p) =>
    p.active &&
    css`
      background: #ebeef4;
    `}
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  > img {
    transform: translateX(-10px);
    opacity: 0;
  }
  > img.display {
    transform: translateX(0);
    transition: all 0.2s ease-out;
    opacity: 1;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 16px;
  > * {
    display: flex;
    align-items: center;
    color: #506176;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    > :not(:first-child) {
      margin-left: 16px;
    }
  }
`;

export default function Tab({ title, items, active, onClick }) {
  const { width } = useWindowSize();

  return (
    <Wrapper active={active || width <= 800} onClick={onClick}>
      <TitleWrapper>
        <div>{title}</div>
        <img
          className={active || width <= 800 ? "display" : ""}
          src="/imgs/icons/arrow-right.svg"
          alt=""
        />
      </TitleWrapper>
      <ContentWrapper>
        {(items || []).map((item, index) => (
          <div key={index}>
            <img src="/imgs/icons/approve.svg" alt="" />
            <div>{item}</div>
          </div>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}
