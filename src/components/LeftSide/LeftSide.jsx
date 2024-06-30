// import React from "react";
// import "./LeftSide.css";
// import { mergeArtist } from "../../helper";
// import MusicProgress from "../MusicProgress/MusicProgress";
// import Loader from "../Loader/Loader";

// const LeftSide = ({ songs }) => {
//   // console.log({ songs });
//   return (
//     <>
//       {songs?.length > 0 ? (
//         <div className="left">
//           <div className="currentplaying">
//             <p className="heading">Tracks</p>
//           </div>
//           <div className="list-music-trending">
//             {songs.map((song, index) => (
//               <div key={index} className="loaders">
//                 <div className="songs">
//                   <p className="names">{song.name}</p>
//                   <p className="artist">{mergeArtist(song.artists)}</p>
//                 </div>
//                 <div
//                   className="albumcover"
//                   style={{ backgroundImage: song?.album?.images[0]?.url }}
//                 >
//                   <image
//                     src={song?.album?.images[0]?.url}
//                     height={64}
//                     width={64}
//                   />
//                 </div>
//                 <div className="play"></div>
//               </div>
//             ))}
//           </div>
//           <MusicProgress />
//         </div>
//       ) : (
//         <div className="left loader-layout">
//           <Loader />
//         </div>
//       )}
//     </>
//   );
// };

// export default LeftSide;
