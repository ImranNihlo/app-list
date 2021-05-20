import Albums from "./Albums";
import Photos from "./Photos";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadAlbums, loadPhotos} from "../redux/actions";
import { Route } from "react-router-dom"
function App() {
  const dispatch = useDispatch();

  const loadingAlbums = useSelector(state => state.albums.loadingAlbums);
  const loadingPhotos = useSelector(state => state.photos.loadingPhotos);

  useEffect(() => {
      dispatch(loadAlbums());
      dispatch(loadPhotos());
  }, []);

  if (loadingAlbums || loadingPhotos) {
      return (
          <div>
              идет загрузка...
          </div>
      )
  }

  return (
    <div className="container">
        <Albums />
        <Route path="/:id?">
            <Photos />
        </Route>
    </div>
  );
}

export default App;
