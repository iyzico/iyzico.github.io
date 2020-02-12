import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GithubRepoCard from "../GithubRepoCard";
import IyzicoGithubRepos from "../../constants/githubReposIyzico";

function GithubRepos(params) {
  const [repos, setRepos] = useState(IyzicoGithubRepos);

  useEffect(() => {
    fetch("https://api.github.com/users/iyzico/repos?type=owner")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        !myJson.message && setRepos(myJson);
      });
  }, []);

  return (
    <Container>
      <Title>Open Source Projects</Title>
      {repos && (
        <GithubReposContainer>
          {repos.map(
            ({
              id,
              full_name,
              description,
              language,
              stargazers_count,
              forks,
              html_url
            }) => {
              return (
                <GithubRepoCard
                  key={id}
                  title={full_name}
                  description={description}
                  language={language}
                  starCount={stargazers_count}
                  forkCount={forks}
                  repoUrl={html_url}
                />
              );
            }
          )}
        </GithubReposContainer>
      )}
    </Container>
  );
}

export default GithubRepos;

const Container = styled.div`
  font-size: 14px;
  padding-top: 48px;
  width: 100%;
`;

const Title = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;

const GithubReposContainer = styled.div`
  font-size: 14px;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 24px;
`;
