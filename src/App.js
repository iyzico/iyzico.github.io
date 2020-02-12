import React from "react";
import styled from "styled-components";

import GithubRepos from "./components/GithubRepos";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import WhyIyzico from "./components/WhyIyzico";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Jumbotron />
      <GithubRepos />
      <WhyIyzico />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
`;
