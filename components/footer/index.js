import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #506176;

  .mr-16 {
    margin-right: 16px;
  }

  .mr-8 {
    margin-right: 8px;
  }
`

const Contents = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
`

const Section = styled.div`
  display: flex;
  align-items: center;
  width: 33.33%;

  .light {
    color: #9DA9BB;
  }
`

const SectionRight = styled(Section)`
  justify-content: end;
`

const Link = styled.a`
  margin-right: 24px;
`

export default function Footer() {
  return (<Wrapper>
    <Contents>
      <Section>
        <Link href="/terms">
          Terms
        </Link>
        <Link href="privacy">
          Privacy
        </Link>
      </Section>

      <Section>
        <span className="mr-16">© 2022 SubSquare</span>
        <span className="mr-16 light">Powered by</span>
        <img src="/imgs/logo-grey.svg" alt=""/>
      </Section>

      <SectionRight>
        {/*todo: add link for this*/}
        <Link className="mr-8">
          <img src="/imgs/icons/element.svg" alt=""/>
        </Link>
        <Link href="mailto:hi@opensquare.network">
          <img src="/imgs/icons/mail.svg" alt=""/>
        </Link>
      </SectionRight>
    </Contents>
  </Wrapper>);
}
