import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Segment from './components/Segment';
import Combine from './components/Combine';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Container>
        <Segment />
        <Combine />
      </Container>
    </Fragment>
  );
}

export default App;
