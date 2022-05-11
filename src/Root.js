import React from 'react';
import { hot } from 'react-hot-loader';
import 'normalize.css';

import Slider from './components/Slider';
import ExampleCard from './components/ExampleCard';
import Container from './components/Container';

const responsive = [
  { breakPoint: 1280, cardsToShow: 4 },
  { breakPoint: 760, cardsToShow: 2 },
];

const Root = () => (
  <Container>
    <Slider responsive={responsive}>
      <ExampleCard>Monday</ExampleCard>
      <ExampleCard>Tuesday</ExampleCard>
      <ExampleCard>Wednesday</ExampleCard>
      <ExampleCard>Thursday</ExampleCard>
      <ExampleCard>Friday</ExampleCard>
      <ExampleCard>Saturday</ExampleCard>
    </Slider>
  </Container>
);

export default hot(module)(Root);
