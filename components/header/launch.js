import styled from "styled-components";

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
`;

export default function Launch() {
  return (
    <Wrapper>
      <Button>Launch App</Button>
    </Wrapper>
  );
}
