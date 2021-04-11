const initialState = {
    filter: "",
    selectedUserId: null,
    albums: [],
    photos: [],

    loadingAlbums: false,
    loadingPhotos: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "load/albums/start":
            return {
                ...state,
                loadingAlbums: true
            }

        case "load/albums/success":
            return {
                ...state,
                albums: action.payload,
                loadingAlbums: false
            }

        case "select/albums":
            return {
                ...state,
                selectedUserId: action.payload
            }

        case "load/photos/start":
            return {
                ...state,
                loadingPhotos: true
            }

        case "load/photos/success":
            return {
                ...state,
                photos: action.payload,
                loadingPhotos: false
            }

        default:
            return state;
    }
}