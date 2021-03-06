import React from 'react';
import Photo from "./Photo";
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom"

function Photos(props) {
    const photos = useSelector(state => state.photos.photos)

    const id = parseInt(useParams().id);

    const filtered = photos.filter(photo => {
        if (photo.albumId === id) {
            return true;
        }
        return false;
    })

    if (!id) {
        return (
            <div className="no-user-selected">
                <i className="fa fa-long-arrow-left" aria-hidden="true">  Выбери альбом из списка слева</i>
            </div>
        )
    }


    return (
        <div className="main-photos">
            <div className="photos">
                {filtered.map(photo => {
                    return <Photo photo={photo} />
                })}
            </div>
        </div>
    );
}

export default Photos;