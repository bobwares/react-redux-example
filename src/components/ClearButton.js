import React from 'react';
import RaisedButtonComponent from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

const FetchButton = ({label, name, onButtonClicked}) => (
    <div>
        <RaisedButtonComponent
            onClick={onButtonClicked}
            label={label}
            primary={true}
            style={style} />
    </div>
);

export default FetchButton;
