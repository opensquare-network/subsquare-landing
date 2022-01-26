import styled from "styled-components";

import ExternalLink from "./externalLink";
import { OPTIONS } from "utils/constants";

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
  cursor: pointer;
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

export default function Options({ onClose, isLink, setSelected }) {
  return (
    <Wrapper>
      {(OPTIONS || []).map((item, index) =>
        isLink ? (
          <ExternalLink key={index} href={item.url}>
            <Item onClick={onClose}>
              <img src={`/imgs/icons/${item.icon}`} alt="" />
              {item.text}
            </Item>
          </ExternalLink>
        ) : (
          <Item
            key={index}
            onClick={() => {
              setSelected(item.value);
              onClose();
            }}
          >
            <img src={`/imgs/icons/${item.icon}`} alt="" />
            {item.text}
          </Item>
        )
      )}
    </Wrapper>
  );
}
