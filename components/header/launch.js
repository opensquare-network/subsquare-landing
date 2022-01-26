import styled, { css } from "styled-components";
import { useState, useRef } from "react";

import Options from "components/options";
import { useOnClickOutside } from "utils/hooks";

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  all: unset;
  padding: 11px;
  border: 1px solid #e0e4eb;
  border-radius: 4px;
  color: #1e2134;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  cursor: pointer;
  :hover {
    border-color: #c2c8d5;
  }
  ${(p) =>
    p.active &&
    css`
      border-color: #c2c8d5;
    `}
`;

const OptionsWrapper = styled.div`
  width: 182px;
  position: absolute;
  margin-top: 4px;
  right: 0;
`;

export default function Launch() {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setShow(false));

  return (
    <Wrapper ref={ref}>
      <Button active={show} onClick={() => setShow(!show)}>
        Launch App
      </Button>
      {show && (
        <OptionsWrapper>
          <Options onClose={() => setShow(false)} />
        </OptionsWrapper>
      )}
    </Wrapper>
  );
}
