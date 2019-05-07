import React, {Fragment} from 'react';
import "./App.scss";
import { Container, Section } from 'rbx';
import Header from "./components/header";

const App = () => (
  <fragment>
    <Header />
    <Section>
      <Container>
        One Bit Food
      </Container>
    </Section>
  </fragment>
)

export default App;
