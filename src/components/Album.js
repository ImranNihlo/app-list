import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAlbum} from "../redux/actions";

function Album(props) {
    const albumId = useSelector(state => state.albums.id)
    const dispatch = useDispatch();

    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.userId));
    }

    return (
        <li
            className={albumId === props.album.id ? "selected" : "li"}
            onClick={handleSelectAlbum}>
            <a href="#">
                {props.album.title}
            </a>
        </li>
    );
}

export default Album;