import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Album(props) {
    const selectedAlbumId = useSelector(state => state.albums.selectedAlbumId)
    const dispatch = useDispatch();

    return (
        <li className={selectedAlbumId === props.album.id ? "selected" : "li"}>
            <Link to={`/${props.album.id}`}>
                <a href="#">
                    {props.album.title}
                </a>
            </Link>
        </li>
    );
}

export default Album;