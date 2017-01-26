import React from 'react';
import { connect } from 'react-redux';

const ItemsList = () => {
    if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
        return <p>Loading…</p>;
    }

    return (
        <ul>
            {this.props.items.map((item) => (
                <li key={item.id}>
                    {item.label}
                </li>
            ))}
        </ul>
    );
}
// const mapStateToProps = (state) => {
//     return {
//         items: state.items,
//         hasErrored: state.itemsHasErrored,
//         isLoading: state.itemsIsLoading
//     };
// };
// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //         fetchData: (url) => dispatch(itemsFetchData(url))
// //     };
// // };

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchData: (url) => dispatch(itemsFetchData(url))
//     };
//};
export default connect(mapStateToProps)(ItemsList);

