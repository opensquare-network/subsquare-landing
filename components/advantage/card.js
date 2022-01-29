import styled from "styled-components";

const Wrapper = styled.div`
  flex-grow: 1;
  background: #ffffff;
  border: 1px solid #ebeef4;
  box-shadow: 0px 6px 7px rgba(30, 33, 52, 0.02),
    0px 1.34018px 1.56354px rgba(30, 33, 52, 0.0119221),
    0px 0.399006px 0.465507px rgba(30, 33, 52, 0.00807786);
  border-radius: 6px;
  line-height: 0;
  overflow: hidden;
`;

const TopWrapper = styled.div`
  padding: 24px;
  > :nth-child(2) {
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
  }
  > :nth-child(3) {
    font-weight: bold;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0.16em;
    color: #9da9bb;
  }
  > :not(:first-child) {
    margin-top: 16px;
  }
`;

const ImgWrapper = styled.div`
  height: 194px;
  > img {
    object-fit: cover;
    object-position: left top;
    width: 100%;
    height: 100%;
  }
`;

export default function Card({ data }) {
  return (
    <Wrapper>
      <TopWrapper>
        <img src={`/imgs/icons/${data.icon}`} alt="" />
        <div>{data.title}</div>
        {!data.img && <div>COMING SOON</div>}
      </TopWrapper>
      {data.img && (
        <ImgWrapper>
          <img src={`/imgs/${data.img}`} alt="" />
        </ImgWrapper>
      )}
    </Wrapper>
  );
}
