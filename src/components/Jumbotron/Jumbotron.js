import React from "react";
import styled from "styled-components";
import DevIcon from "devicon-react-svg";

import ResearcherIllustration from "../../assets/images/researcherIllustration";

function Jumbotron(params) {
  return (
    <Container>
      <RightContent>
        <Title>
          <IyzicoText>iyzico</IyzicoText> <HeartText>❤</HeartText> ’s Open
          Source
        </Title>
        <Description>
          iyzico is mostly built on free and open source software. In addition
          to iyzico integrations we wanted to do a bit to give back to the
          community, and here’s some of that software
          <LanguagesContainer>
            <StyledIcon icon="react" />
            <StyledIcon icon="java" />
            <StyledIcon icon="python" />
            <StyledIcon icon="javascript" />
            <StyledIcon icon="ruby" />
            <StyledIcon icon="php" />
            <StyledIcon icon="dotnet" />
            <StyledIcon icon="css3" />
          </LanguagesContainer>
          <JoinUsButton href="https://iyzico.recruitee.com/" target="_blank">
            Join Us
          </JoinUsButton>
        </Description>
      </RightContent>
      <LeftContent>
        <ResearcherIllustration width={512} />
      </LeftContent>
    </Container>
  );
}

export default Jumbotron;

const Container = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px 72px;
  background-image: linear-gradient(to bottom, #fff, #00bbd333);
  @media (max-width: 768px) {
    padding: 24px 24px;
  }
`;
const Title = styled.div`
  font-size: 64px;
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;
const Description = styled.div`
  font-size: 18px;
  padding: 12px 52px 12px 0;
  color: grey;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const RightContent = styled.div`
  font-size: 24px;
`;
const LeftContent = styled.div`
  font-size: 24px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeartText = styled.span`
  color: red;
`;

const IyzicoText = styled.span`
  color: #00bbd3;
  font-weight: 600;
`;

const StyledIcon = styled(DevIcon)`
  width: 36px;
  margin-right: 8px;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 24px;
  }
`;

const JoinUsButton = styled.a`
  cursor: pointer;
  user-select: none;
  min-width: 181px;
  min-height: 39px;
  border-radius: 10px;
  background-image: linear-gradient(102deg, #fcb33b, #ffa108);
  text-align: center;
  line-height: 21px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const LanguagesContainer = styled.div`
  margin-bottom: 24px;
`;
