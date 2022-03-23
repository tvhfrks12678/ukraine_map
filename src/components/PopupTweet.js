import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export const PopupTweet = () => {
  const listItems = (
    <Marker position={[47.36555113667759, 32.26169976441799]}>
      <Popup>
        <TwitterTweetEmbed tweetId={'1506061262454771715'} />
        {'ミコライフ、ロシアの橋渡し地点がウクライナ軍に攻撃される'}
      </Popup>
    </Marker>
  );
  return { listItems };
};

// class MapMemo {
//   constructor(longitude, latitude, twitterId, explanation, twitterUrl, tags) {
//     this.longitude = longitude;
//     this.latitude = latitude;
//     this.twitterId = twitterId;
//     this.explanation = explanation;
//     this.twitter = this.getTwitter(twitterUrl);
//     this.tags = tags;
//   }
//   getTwitter(twitterUrl) {
//     return twitterUrl + 3;
//   }
// }

// export const Spinner = ({ text = '', size = '5em' }) => {
//   const header = text ? <h4>{text}</h4> : null;
//   return (
//     <div className="spinner">
//       {header}
//       <div className="loader" style={{ height: size, width: size }} />
//     </div>
//   );
// };

// import React from "react";

// const Child = (props) => {

//   // propsから値取り出し
//   const { nameList, clickButton } = props;

//   // ループしてボタン一覧を作成
//   const buttonItems = nameList.map((namelist, idx) => {
//     return (
//       <div key={idx} style={{margin: 20}}>
//         <button onClick={() => clickButton(namelist.firstname)}>
//           {namelist.lastname}
//         </button>
//       </div>
//     );
//   });

//   return (
//     <div>
//       {buttonItems}
//     </div>
//   );
// }

// export default Child;
