import React, { Component } from 'react';
import './App.css';
import { Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import DataContainer from './DataContainer';

// material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';


// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});
const styles = {

    container: {
        textAlign: 'center',
        paddingTop: 0,
    },
};


const Home = () => <h1>Welcome</h1>;

const NotFound = () => (
    <h1>404.. This page is not found!</h1>);

const Nav = () => (
    <div>
        <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;
        <Link activeStyle={{color:'#53acff'}} to='/items'>Items</Link>&nbsp;
        <Link activeStyle={{color:'#53acff'}} to='/about'>About</Link>
    </div>
);

const Container = (props) => {
    console.log('props',props);
    return (
        <div>
            <Nav />
            {props.children}
        </div>);
};

class App extends Component {

    render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App"  style={styles.container}>
            <AppBar
                title="Data Bus"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />

            <div>
                <Router history={hashHistory}>
                    <Route path='/' component={Container}>
                        <IndexRoute component={Home} />
                        <Route path='/items' component={DataContainer}>
                        </Route>
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>
            </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;