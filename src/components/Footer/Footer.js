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
          <StyledSocialIcon url="https://github.com/iyzico" fgColor="#fff" bgColor="#000"/>
          <StyledSocialIcon url="https://www.linkedin.com/company/iyzi-payments/" fgColor="#fff"/>
          <StyledSocialIcon url="https://www.instagram.com/iyzico/" fgColor="#fff" bgColor="#C13584"/>
          <StyledSocialIcon url="https://twitter.com/iyzico" fgColor="#fff"/>
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
  padding: 20px;
`;

const FooterText = styled.div`
  font-family: "Open Sans", sans-serif;
  min-height: 17px;
  font-size: 12px;
  font-weight: 600;
  text-align: right;
  color: #cdf1f6;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;

const StyledSocialIcon = styled(SocialIcon)`
  margin-left: 4px;
`;

export default Footer;
