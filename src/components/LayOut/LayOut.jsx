import { useState, useEffect } from "react";
import songs from "../../data.json";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import "./LayOut.css";
import { getToken, getTrackInfo } from "../../spotifyAPI";
import Loader from "../Loader/Loader";

const LayOut = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getToken().then((response) => {
      getTrackInfo(response.access_token).then((profile) => {
        console.log(profile?.tracks);
        setTracks(profile?.tracks);
      });
    });
  }, []);

  return (
    <div className="layout">
      <LeftSide songs={tracks} />
      <RightSide songs={tracks} />
    </div>
  );
};

export default LayOut;
