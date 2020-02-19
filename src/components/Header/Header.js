import React from "react";
import styled from "styled-components";

import LinkIcon from "../../assets/icons/LinkIcon";

function Header(params) {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <GithubItemLink href="https://github.com/iyzico" target="_blank">
            <LinkIcon /> github.com/iyzico
          </GithubItemLink>
          <MenuItem href="https://dev.iyzipay.com/en" target="_blank">
            Docs
          </MenuItem>
          <MenuItem href="https://iyzico.engineering/" target="_blank">
            Blog
          </MenuItem>
          <MenuItem href="https://iyzico.recruitee.com" target="_blank">
            Careers
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 64px;
    padding-left: 0;
    justify-content: flex-end;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid #efefef;
  max-width: 1200px;
  width: 100%;
  height: 100%;
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
  outline: 0;
  :visited {
    color: black;
  }
  :hover,
  :active,
  :focus {
    outline: 0;
  }

  @media (max-width: 768px) {
    height: inherit;
  }
`;

const GithubItemLink = styled(MenuItem)`
  @media (max-width: 768px) {
    display: none;
  }
`;
