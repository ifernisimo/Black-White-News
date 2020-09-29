import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import MainPageComponentContainer from "./components/MainPage/MainPageComponentContainer";

function App() {
  return (
    <Container maxWidth="lg">
      <MainPageComponentContainer />
    </Container>
  );
}

export default App;
