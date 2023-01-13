import styled from "styled-components";

import OptionGroup from "./optionGroup";
import MenuGroups from "utils/menuGroups";

const Wrapper = styled.div`
  position: absolute;
  margin-top: 4px;
  right: 0;

  display: flex;
  gap: 8px;
  padding: 8px;
  flex-direction: column;
  width: 384px;
  @media screen and (max-width: 768px) {
    width: 100% !important;
    min-width: 240px;
    padding: 8px 0;
  }

  background: #ffffff;
  border: 1px solid #ebeef4;
  box-shadow: 0px 6px 22px rgba(30, 33, 52, 0.11),
    0px 1.34018px 4.91399px rgba(30, 33, 52, 0.0655718),
    0px 0.399006px 1.46302px rgba(30, 33, 52, 0.0444282);
  border-radius: 4px;
`;

export default function Options({ onClose, isLink, setSelected }) {
  return (
    <Wrapper>
      <OptionGroup
        groupName={MenuGroups.PolkadotAndParachains}
        onClose={onClose}
        isLink={isLink}
        setSelected={setSelected}
      />
      <OptionGroup
        groupName={MenuGroups.KusamaAndParachains}
        onClose={onClose}
        isLink={isLink}
        setSelected={setSelected}
      />
      <OptionGroup
        groupName={MenuGroups.Solochain}
        onClose={onClose}
        isLink={isLink}
        setSelected={setSelected}
      />
    </Wrapper>
  );
}
