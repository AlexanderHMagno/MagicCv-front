import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function ContainerWrapper({children}) {


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters={true} style={{height: '100vh',minWidth:"100%" }}>
          {children}
      </Container>
    </React.Fragment>
  );
}