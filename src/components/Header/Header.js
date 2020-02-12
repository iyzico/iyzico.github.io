import React from "react";
import styled from "styled-components";
import DevIcon from "devicon-react-svg";

import LogoIyzico from "../../assets/images/logoIyzico";
import LinkIcon from "../../assets/icons/LinkIcon";

function Header(params) {
  return (
    <Container>
      <LeftMenu>
        <LogoIyzico />
        <OpenSourceText>
          for Developers <StyledIcon icon="code" />
        </OpenSourceText>
      </LeftMenu>
      <Menu>
        <GithubItemLink href="https://github.com/iyzico" target="_blank">
          <LinkIcon /> github.com/iyzico
        </GithubItemLink>
        <MenuItem href="https://dev.iyzipay.com" target="_blank">
          Docs
        </MenuItem>
        <MenuItem href="https://iyzico.engineering/" target="_blank">
          Blog
        </MenuItem>
        <MenuItem
          href="https://www.linkedin.com/jobs/search/?f_C=3059569&locationId=OTHERS.worldwide"
          target="_blank"
        >
          Careers
        </MenuItem>
      </Menu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 64px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  padding-left: 24px;

  @media (max-width: 768px) {
    height: 64px;
    padding-left: 0;
    justify-content: flex-end;
  }
`;

const Menu = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  color: black;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex: 1;
    justify-content: space-around;
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 10px 24px;
  :visited {
    color: black;
  }

  @media (max-width: 768px) {
    height: inherit;
  }
`;
const OpenSourceText = styled.span`
  margin-left: 8px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledIcon = styled(DevIcon)`
  width: 32px;
`;

const LeftMenu = styled(Menu)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const GithubItemLink = styled(MenuItem)`
  @media (max-width: 768px) {
    display: none;
  }
`;
