import styled from "styled-components";

import { useEffect, useState } from "react";

const Wrapper = styled.img`
  transform: translateX(-10px);
  opacity: 0;
  &.display {
    transition: all 0.2s ease-in;
    transform: translateX(0);
    opacity: 1;
  }
`;

export default function Arrow() {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <Wrapper
      className={display ? "display" : ""}
      src="imgs/icons/arrow-right.svg"
      alt=""
    />
  );
}
