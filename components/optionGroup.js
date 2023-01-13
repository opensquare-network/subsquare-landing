import styled, { css } from "styled-components";
import React from "react";
import ExternalLink from "./externalLink";
import { OPTIONS } from "utils/constants";

const Wrapper = styled.div`
`;

const GroupName = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;

  font-weight: 700;
  font-size: 12px;
  line-height: 12px;

  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9DA9BB;
`;

const GroupOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  padding: 0px;

`;

const Item = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0 12px;
  height: 36px;

  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #506176;

  :hover {
    background: #F6F7FA;
  }
  > :not(:first-child) {
    margin-left: 8px;
  }
  > div {
    flex-grow: 1;
  }
  > img.logo {
    flex: 0 0 24px;
  }
`;

export default function NetworkOptionGroup({ groupName, isLink, onClose, setSelected }) {
  const filteredNodes = OPTIONS.filter(({ group }) => group === groupName);
  return (
    <Wrapper>
      <GroupName>{groupName}</GroupName>
      <GroupOptions>
        {filteredNodes.map((item, index) => (
          isLink ? (
            <ExternalLink key={index} href={item.url}>
              <Item onClick={onClose}>
                <img src={`/imgs/icons/${item.icon}`} alt="" width="24px" height="24px" />
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
              <img src={`/imgs/icons/${item.icon}`} alt="" width="24px" height="24px" />
              {item.text}
            </Item>
          ))
        )}
      </GroupOptions>
    </Wrapper>
  )
}
