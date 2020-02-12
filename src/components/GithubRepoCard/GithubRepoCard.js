import React from "react";
import styled from "styled-components";

import {
  GithubRepoIcon,
  GithubStarIcon,
  GithubForkIcon
} from "../../assets/icons";

import GITHUB_LANGUAGES_COLORS from "../../constants/githubLanguageColors";

function GithubRepoCard({
  title,
  description,
  language,
  starCount,
  forkCount,
  repoUrl
}) {
  return (
    <Wrapper>
      <TitleWrapper>
        <GithubRepoIconStyled width={16} height={16} />
        <Title href={repoUrl}>{title}</Title>
      </TitleWrapper>
      <Description>{description}</Description>
      <Footer>
        {language && (
          <Link>
            <Dot color={GITHUB_LANGUAGES_COLORS[language]} />
            <Language>{language}</Language>
          </Link>
        )}
        <Link href={`${repoUrl}/stargazers`}>
          <GithubStarIcon width={14} height={16} />
          <Counter>{starCount}</Counter>
        </Link>
        <Link href={`${repoUrl}/network/members`}>
          <GithubForkIcon width={14} height={16} />
          <Counter>{forkCount}</Counter>
        </Link>
      </Footer>
    </Wrapper>
  );
}

export default GithubRepoCard;

const Wrapper = styled.div`
  padding: 16px;
  border: 1px solid #d1d5da;
  font-size: 14px;
  width: 300px;
  margin: 8px;
  border-radius: 4px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const GithubRepoIconStyled = styled(GithubRepoIcon)`
  margin-right: 8px;
`;

const Title = styled.a`
  color: #0366d6;
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  margin-bottom: 16px;
  font-size: 12px;
  color: #586069;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 12px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  height: 14px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 16px;
`;

const Counter = styled.p`
  color: #586069;
  margin-left: 3px;
`;

const Dot = styled.span`
  height: 12px;
  width: 12px;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: inline-block;
  margin-right: 4px;
`;

const Language = styled.span`
  color: #586069;
  font-size: 12px;
`;
