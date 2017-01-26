import { connect } from 'react-redux';
import React, { Component } from 'react';
// Components
import ItemsList from '../components/ItemsList';
import {fetchItemsAction} from '../actions/fetchItemsAction'
import {resetItemsAction} from '../actions/resetItemsAction'
import FetchButton from '../components/FetchButton';
import ResetButton from '../components/ResetButton';

const url = 'http://5826ed963900d612000138bd.mockapi.io/items';

class DataContainer extends Component {

    render() {
        return (
        <div>
            <div>
                <FetchButton
                    label="Fetch Items"
                    onButtonClicked={() => this.props.buttonClicked(url)}
                />

                <ResetButton
                    label="Reset"
                    onButtonClicked={() => this.props.resetButtonClicked(url)}
                    />
            </div>
            <ItemsList/>
        </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        buttonClicked: (...args) => dispatch(fetchItemsAction(...args)),
        resetButtonClicked: (...args) => dispatch(resetItemsAction(...args))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(DataContainer);
