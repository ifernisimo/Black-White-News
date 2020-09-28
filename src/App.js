import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import MainPageComponent from "./components/MainPage/MainPageComponent";

function App() {
  return (
    <Container maxWidth="lg">
      <MainPageComponent />
    </Container>
  );
}

export default App;
