import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthenticationView from './view/AuthenticationView'
import HomeView from './view/HomeView'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import TestView from './view/TestView'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter basename='/dummy'>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/home" component={HomeView} />
          <Route path="/auth" component={AuthenticationView} />
          <Route path="/test" component={TestView} />
          <Route render={() => (<div>No match</div>)} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
