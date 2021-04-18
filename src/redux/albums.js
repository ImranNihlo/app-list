const initialState = {
    selectedAlbumId: null,
    albums: [],

    loadingAlbums: false,
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
                selectedAlbumId: action.payload
            }

        default:
            return state;
    }
}