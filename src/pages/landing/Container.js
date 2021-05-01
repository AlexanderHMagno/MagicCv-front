import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function ContainerWrapper({children}) {


  return (
    <React.Fragment>
      <CssBaseline />
      <Container  disableGutters={true} style={{height: '100vh' }}>
          {children}
      </Container>
    </React.Fragment>
  );
}