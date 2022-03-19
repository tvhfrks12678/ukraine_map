import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default class SimpleExample extends Component {
  render() {
    const position = [50.492566, 30.365479];
    const position1 = [53.115596, 26.032273];
    return (
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100vh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <TwitterTweetEmbed tweetId={'1504492667283062789'} />
            {/* <a href="https://qiita.com/frogcat/items/2e1746e3bc637123af44">
              Leaflet のポップアップのカスタマイズ - Qiita
            </a>
            <br /> */}
            Kyiv
          </Popup>
        </Marker>
        <Marker position={position1}>
          <Popup>
            <TwitterTweetEmbed tweetId={'1504408541100404736'} />
            {/* <a href="https://qiita.com/frogcat/items/2e1746e3bc637123af44">
              Leaflet のポップアップのカスタマイズ - Qiita
            </a>
            <br /> */}
            The transportation of missiles for S-300 or S-400 missile systems
            was spotted in Baranavichy (Brest region). At least 8 missiles were
            transported in 2 Russian KamAZ trucks with “V” marks. The 25th
            region (Eastern Military District of Russia) was indicated on
            license plates.
            <br />
            S-300またはS-400ミサイルシステム用ミサイルの輸送がBaranavichy（Brest地方）で目撃された。少なくとも8発のミサイルが「V」マークの付いたロシアのKamAZトラック2台で輸送された。ナンバープレートに第25地区（ロシア東部軍管区）が記載されていた。
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}
