import buttonClickedAction from '../actions'
import {connect} from 'react-redux';
import React, { Component } from 'react';
import './App.css';

// Components
import ItemList from '../components/ItemList';

// material UI
import RaisedButton from '../components/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
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
class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App"  style={styles.container}>
            <AppBar
                title="Data Bus"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <div>
                <ItemList/>
            </div>
            <div>
                <DatePicker hintText="Start Date" />
            </div>
            <RaisedButton
                name="START"
                label="Start"
                onButtonClicked={() => this.props.buttonClicked("START")}
            />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {clicked:state.buttonReducer.clicked}
};
const mapDispatchToProps = (dispatch) => {
    return {
        buttonClicked: (...args) => dispatch(buttonClickedAction(...args))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);