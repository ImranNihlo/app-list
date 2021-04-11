import React from 'react';
import {useDispatch} from "react-redux";
import {selectAlbum} from "../redux/actions";

function Album(props) {
    const dispatch = useDispatch();

    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.userId));
    }

    return (
        <li onClick={handleSelectAlbum}>
            <a href="#">
                {props.album.title}
            </a>
        </li>
    );
}

export default Album;