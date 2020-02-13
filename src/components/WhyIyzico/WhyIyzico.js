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
            characteristics that define engineering at iyzico.
          </CardContent>
        </Card>
        <Card>
          <CardImage src={iyzicoTeam} />
          <CardTitle>Freedom Under Responsibility</CardTitle>
          <CardContent>
            We built a working environment where team members can work
            productively and enjoy their time.
          </CardContent>
        </Card>
        <Card>
          <CardImage src={kadriyePair} />
          <CardTitle>Pair Programming</CardTitle>
          <CardContent>
            In iyzico engineering, we use pair programming practice for more
            than 4 years and it is one of the core practices in our engineering
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
