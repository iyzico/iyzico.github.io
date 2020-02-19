import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

import LogoIyzico from "../../assets/images/logoIyzico";

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <LogoIyzico iyzicocolor="#fff" />
        <FooterText>
          <StyledSocialIcon url="https://github.com/iyzico" fgColor="#fff" bgColor="#000" style={{ height: 36, width: 36 }}/>
          <StyledSocialIcon url="https://www.linkedin.com/company/iyzi-payments/" fgColor="#fff" style={{ height: 36, width: 36 }}/>
          <StyledSocialIcon url="https://www.instagram.com/iyzico/" fgColor="#fff" bgColor="#C13584" style={{ height: 36, width: 36 }}/>
          <StyledSocialIcon url="https://twitter.com/iyzicoeng" fgColor="#fff" style={{ height: 36, width: 36 }}/>
        </FooterText>
      </Container>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #07bcd3;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const FooterText = styled.div`
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  max-width: 1200px;
`;

const StyledSocialIcon = styled(SocialIcon)`
  margin-left: 4px;
  height: 16px;
  width: 16px;
`;

export default Footer;
