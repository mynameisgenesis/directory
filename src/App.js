import React from 'react';
import './App.css';
import { SideMenu } from './components/SideMenu';
import DirectoryTable from './components/DirectoryTable';
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <Container maxWidth="md">
      <div className="App">
        <SideMenu></SideMenu>
        <DirectoryTable></DirectoryTable>
      </div>
    </Container>

  );
}

export default App;
