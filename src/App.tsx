import React from 'react';
import {Heading,Container,Box} from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

//My Imports
import HashTagsTable from "./components/HashtagsTable/Index"
import Trade from "./components/trade/index"
import NavBar from "./components/navbar"



function App() {
  return (
    <Container maxW="container.xl" >
      <NavBar />
      <Switch>
        <Route exact path='/table' component={HashTagsTable} />
        <Route exact path='/trade' component={Trade} />
        <Redirect from='/' to='/table' />
      </Switch>
    </Container>
  );
}

export default App;
