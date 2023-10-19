import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnime } from "./action";

function App() {
  const { data, error, status } = useSelector((state) => state.post);

  const [url, setUrl] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnime());

    if (status === "loading") {
      return;
    }

    if (status === "error") {
      return;
    }
  }, [data]);

  const handleChange = () => {
    // console.log(data?.url);

    dispatch(getAnime());

    if (data && data.url) {
      setUrl(data.url);
    }
  };

  return (
    <div className="bodyCover">
      <div className="coverWrapper">
        <h1 className="headerText">
          Random Anime <span className="blueSpan">Images</span>
        </h1>
        <div className="imageWrapper">
          <div className="sectionContainer">
            <div className="buttonContainer">
              {/* <button onClick={handleProcess} className="processButton">
              Process
            </button> */}
              <button onClick={handleChange} className="changeButton">
                Change Anime
              </button>
            </div>
            <div className="imageContainer">
              {url && <img src={url} alt="Anime Image" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
