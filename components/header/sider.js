import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

import Options from "components/options";
import { OPTIONS } from "utils/constants";
import { useOnClickOutside, useWindowSize } from "utils/hooks";
import ExternalLink from "components/externalLink";

const Wrapper = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

const Button = styled.div`
  width: 38px;
  height: 38px;
  border: 1px solid #e0e4eb;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    border-color: #c2c8d5;
  }
`;

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-end;
  z-index: 9999;
`;

const Pannel = styled.div`
  width: 264px;
  background: #ffffff;
  box-shadow: -6px 0px 22px rgba(30, 33, 52, 0.11),
    -1.34px 0px 4.91399px rgba(30, 33, 52, 0.0655718),
    -0.4px 0px 1.46302px rgba(30, 33, 52, 0.0444282);
`;

const Header = styled.div`
  height: 64px;
  border-bottom: 1px solid #ebeef4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 16px;
`;

const ContentWrapper = styled.div`
  margin: 58px 32px 0;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 36px;
  letter-spacing: 0.16em;
  color: #9da9bb;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Select = styled.div`
  height: 38px;
  border: 1px solid #e0e4eb;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 12px;
  > div {
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    margin: 0 8px;
    color: #1e2134;
    flex-grow: 1;
  }
  > img:first-child {
    width: 24px;
    height: 24px;
  }
  > img:last-child {
    width: 14px;
    height: 14px;
  }
`;

const OptionsWrapper = styled.div`
  position: absolute;
  margin-top: 4px;
  width: 100%;
`;

const LinkButton = styled.div`
  background: #1e2134;
  border-radius: 4px;
  height: 38px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #ffffff;
  padding: 12px;
  margin-top: 24px;
`;

export default function Sider() {
  const [show, setShow] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(OPTIONS[0]?.value);
  const ref = useRef();
  const { width } = useWindowSize();

  useOnClickOutside(ref, () => setShowOptions(false));

  useEffect(() => {
    if (width > 800) {
      setShow(false);
    }
  }, [width]);

  useEffect(() => {
    setShowOptions(false);
  }, [show]);

  return (
    <Wrapper>
      <Button onClick={() => setShow(true)}>
        <img src="/imgs/icons/arrow-right.svg" alt="" />
      </Button>
      {show && (
        <Background onClick={() => setShow(false)}>
          <Pannel onClick={(e) => e.stopPropagation()}>
            <Header>
              <Button onClick={() => setShow(false)}>
                <img src="/imgs/icons/close.svg" alt="" />
              </Button>
            </Header>
            <ContentWrapper>
              <Title>NETWORK</Title>
              <SelectWrapper ref={ref}>
                <Select onClick={() => setShowOptions(!showOptions)}>
                  <img
                    src={`/imgs/icons/${
                      OPTIONS.find((item) => item.value === selected)?.icon
                    }`}
                    alt=""
                  />
                  <div>
                    {OPTIONS.find((item) => item.value === selected)?.text}
                  </div>
                  <img src="/imgs/icons/caret-down.svg" alt="" />
                </Select>
                {showOptions && (
                  <OptionsWrapper>
                    <Options
                      setSelected={setSelected}
                      onClose={() => setShowOptions(false)}
                    />
                  </OptionsWrapper>
                )}
              </SelectWrapper>
              <ExternalLink
                href={OPTIONS.find((item) => item.value === selected).url}
              >
                <LinkButton onClick={() => setShow(false)}>
                  Launch App
                </LinkButton>
              </ExternalLink>
            </ContentWrapper>
          </Pannel>
        </Background>
      )}
    </Wrapper>
  );
}
