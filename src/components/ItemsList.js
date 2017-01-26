import React from 'react';
//import React from 'react';
import { connect } from 'react-redux';

const ItemsList = ({hasErrored,isLoading,items}) => {
//class ItemsList extends Component {

        if (hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );

};
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //         fetchData: (url) => dispatch(itemsFetchData(url))
// //     };
// // };
/*
const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};*/
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchData: (url) => dispatch(itemsFetchData(url))
//     };
//};

export default connect(mapStateToProps)(ItemsList);
//export default ItemsList;

