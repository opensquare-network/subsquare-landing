import styled from "styled-components";

const Wrapper = styled.div`
  background: #6848ff;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #ffffff;
  cursor: pointer;
  padding: 12px;
  text-align: center;
`;

export default function Button({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
