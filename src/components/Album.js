import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAlbum} from "../redux/actions";

function Album(props) {
    const selectedAlbumId = useSelector(state => state.albums.selectedAlbumId)
    const dispatch = useDispatch();

    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.id));
    }

    return (
        <li
            className={selectedAlbumId === props.album.id ? "selected" : "li"}
            onClick={handleSelectAlbum}>
            <a href="#">
                {props.album.title}
            </a>
        </li>
    );
}

export default Album;