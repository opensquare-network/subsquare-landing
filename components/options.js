import styled from "styled-components";

import ExternalLink from "./externalLink";

const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #ebeef4;
  box-shadow: 0px 6px 22px rgba(30, 33, 52, 0.11),
    0px 1.34018px 4.91399px rgba(30, 33, 52, 0.0655718),
    0px 0.399006px 1.46302px rgba(30, 33, 52, 0.0444282);
  border-radius: 4px;
  padding: 8px 0;
`;

const Item = styled.div`
  height: 36px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #506176;
  > img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  :hover {
    background: #f6f7fa;
    color: #1e2134;
  }
`;

const OPTIONS = [
  {
    value: "acala",
    text: "Acala",
    icon: "acala.svg",
    url: "https://acala.subsquare.io/",
  },
  {
    value: "karura",
    text: "Larura",
    icon: "karura.svg",
    url: "https://karura.subsquare.io/",
  },
  {
    value: "kusama",
    text: "Kusama",
    icon: "kusama.svg",
    url: "https://kusama.subsquare.io/",
  },
  {
    value: "khala",
    text: "Khala",
    icon: "khala.svg",
    url: "https://khala.subsquare.io/",
  },
  {
    value: "basilisk",
    text: "Basilisk",
    icon: "basilisk.svg",
    url: "https://basilisk.subsquare.io/",
  },
  {
    value: "kintsugi",
    text: "Kintsugi",
    icon: "kintsugi.svg",
    url: "https://kintsugi.subsquare.io/",
  },
  {
    value: "kabocha",
    text: "Kabocha",
    icon: "kabocha.svg",
    url: "https://kabocha.subsquare.io/",
  },
];

export default function Options({ onClose }) {
  return (
    <Wrapper>
      {(OPTIONS || []).map((item, index) => (
        <ExternalLink key={index} href={item.url}>
          <Item onClick={onClose}>
            <img src={`/imgs/icons/${item.icon}`} alt="" />
            {item.text}
          </Item>
        </ExternalLink>
      ))}
    </Wrapper>
  );
}
