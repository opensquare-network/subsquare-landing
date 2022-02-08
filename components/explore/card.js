import styled from "styled-components";

const Wrapper = styled.div`
  flex: 0 0 auto;
  background: #ffffff;
  border: 1px solid #ebeef4;
  box-shadow: 0px 6px 7px rgba(30, 33, 52, 0.02),
    0px 1.34018px 1.56354px rgba(30, 33, 52, 0.0119221),
    0px 0.399006px 0.465507px rgba(30, 33, 52, 0.00807786);
  border-radius: 6px;

  width: fit-content;
  overflow: hidden;
  cursor: pointer;
  img.arrow {
    display: none;
  }
  :hover {
    /* box-shadow: 0px 6px 22px rgba(30, 33, 52, 0.11),
      0px 1.34018px 4.91399px rgba(30, 33, 52, 0.0655718),
      0px 0.399006px 1.46302px rgba(30, 33, 52, 0.0444282); */
    img.arrow {
      display: block;
    }
  }
`;

const ImgWrapper = styled.div`
  width: 344px;
  height: 180px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left top;
  }
  @media screen and (max-width: 800px) {
    width: 284px;
    height: 150px;
  }
`;

const TitleWrapper = styled.div`
  height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
`;

export default function Card({ data }) {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={`/imgs/${data.img}`} alt="" />
      </ImgWrapper>
      <TitleWrapper>
        <div>{data.title}</div>
        <img className="arrow" src="/imgs/icons/arrow-right.svg" alt="" />
      </TitleWrapper>
    </Wrapper>
  );
}
