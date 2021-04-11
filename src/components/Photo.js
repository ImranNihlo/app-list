import React from 'react';

function Photo(props) {
    return (
        <div className="photo">
            <img className="img" src={props.photo.url} alt={"photo"}/>
        </div>
    );
}

export default Photo;