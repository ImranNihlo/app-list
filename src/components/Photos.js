import React from 'react';
import Photo from "./Photo";
import {useSelector} from "react-redux";

function Photos(props) {
    const photos = useSelector(state => state.photos.photos)
    const selectedAlbumId = useSelector(state => state.albums.selectedAlbumId)

    const filtered = photos.filter(photo => {
        if (photo.albumId === selectedAlbumId) {
            return true;
        }
        return false;
    })

    if (selectedAlbumId === null) {
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