import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAlbum} from "../redux/actions";

function Album(props) {
    const selectedUserId = useSelector(state => state.albums.selectedUserId)

    const dispatch = useDispatch();

    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.userId));
    }

    return (
        <li
            className={(selectedUserId === props.album.userId) ? "selected" : "li"}
            onClick={handleSelectAlbum}>
            <a href="#">
                {props.album.title}
            </a>
        </li>
    );
}

export default Album;