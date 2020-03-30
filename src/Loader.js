import React from 'react';


const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};


Loader.defaultProps ={  // default props when you do not have anything for props
    message: 'Loading...'

};
export default Loader;