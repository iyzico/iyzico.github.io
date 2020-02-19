import React from "react";
import styled from "styled-components";

import iyzicoTeam from "../../assets/images/iyzicoTeamBlack.jpeg";
import kadriyePair from "../../assets/images/kadriyePair.png";
import devoxxx from "../../assets/images/devoxx.jpeg";

function WhyIyzico(params) {
  return (
    <Container>
      <Title>iyzico Engineering Culture</Title>
      <CardContainer>
        <Card>
          <CardImage src={devoxxx} />
          <CardTitle>Self Development</CardTitle>
          <CardContent>
            Constant improvement and challenge are the two most important
            characteristics that define engineering at iyzico. We challenge
            and learn from each other and keep up with new technologies via
            meetups, webinars to improve ourselves.
          </CardContent>
        </Card>
        <Card>
          <CardImage src={iyzicoTeam} />
          <CardTitle>Freedom Under Responsibility</CardTitle>
          <CardContent>
            Getting things done is our motto! At iyziPark we work productively
            while working outdoors, enjoying the gym, gaming area. Working under
            freedom delivering responsibilities is the key at iyzico.
          </CardContent>
        </Card>
        <Card>
          <CardImage src={kadriyePair} />
          <CardTitle>Pair Programming</CardTitle>
          <CardContent>
            We don’t take chances when it comes to coding. At iyzico we use pair
            programming, a practice that is at the core of our engineering
            culture.
          </CardContent>
        </Card>
      </CardContainer>
    </Container>
  );
}

export default WhyIyzico;

const Container = styled.div`
  background-color: #fdfdfd;
  margin-top: 48px;
  padding-bottom: 24px;
`;
const CardContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin: 8px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  padding-top: 24px;
`;

const Card = styled.div`
  width: 334px;
  margin: 24px 10px;
`;

const CardImage = styled.div`
  background-image: url(${props => props.src});
  background-origin: border-box;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 8px;
  width: 334px;
  height: 150px;
`;

const CardTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  margin-top: 8px;
`;

const CardContent = styled.div`
  color: #999;
  line-height: 1.3;
`;
