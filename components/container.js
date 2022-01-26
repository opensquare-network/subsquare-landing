import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  @media screen and (max-width: 1080px) {
    padding: 0 16px;
  }
`;

export default function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
