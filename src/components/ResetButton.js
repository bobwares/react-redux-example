import React from 'react';
import RaisedButtonComponent from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

const ResetButton = ({label, name, onButtonClicked}) => (
    <div>
        <RaisedButtonComponent
            onClick={onButtonClicked}
            label={label}
            primary={false}
            style={style} />
    </div>
);

export default ResetButton;
