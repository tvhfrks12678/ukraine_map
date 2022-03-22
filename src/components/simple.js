import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default class SimpleExample extends Component {
  render() {
    const position = [50.492566, 30.365479];
    const position1 = [53.115596, 26.032273];
    const position2 = [50.580141, 30.834326];
    const map3 = new MapMemo(
      50.50371791524624,
      30.417049681025052,
      '1505842872448430086',
      '廃墟',
      'https://twitter.com/agoraitconsulti/status/1505842872448430086?s=21'
    );
    const map4 = new MapMemo(
      46.64216281532372,
      32.61028110882802,
      '1506043718977134602',
      'ロシア軍はウクライナのヘルソンのスーパーマーケットの「Silpo」で略奪',
      'https://twitter.com/markito0171/status/1506043718977134602?s=21'
    );
    const mapList = [map4];

    const listItems = mapList.map((mapItem) => (
      <Marker position={[mapItem.longitude, mapItem.latitude]}>
        <Popup>
          <TwitterTweetEmbed tweetId={mapItem.twitterId} />
          {mapItem.explanation}
        </Popup>
      </Marker>
    ));

    return (
      <MapContainer
        center={position}
        zoom={6.5}
        scrollWheelZoom={false}
        style={{ height: '100vh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <TwitterTweetEmbed tweetId={'1504492667283062789'} />
            キーウ
          </Popup>
        </Marker>
        <Marker position={position1}>
          <Popup>
            <TwitterTweetEmbed tweetId={'1504408541100404736'} />
            The transportation of missiles for S-300 or S-400 missile systems
            was spotted in Baranavichy (Brest region). At least 8 missiles were
            transported in 2 Russian KamAZ trucks with “V” marks. The 25th
            region (Eastern Military District of Russia) was indicated on
            license plates.
            <br />
            S-300またはS-400ミサイルシステム用ミサイルの輸送がBaranavichy（Brest地方）で目撃された。少なくとも8発のミサイルが「V」マークの付いたロシアのKamAZトラック2台で輸送された。ナンバープレートに第25地区（ロシア東部軍管区）が記載されていた。
          </Popup>
          <Circle center={position1} radius={100 * 1000} />
        </Marker>
        <Marker position={position2}>
          <Popup>
            <TwitterTweetEmbed tweetId={'1501834317139484673'} />
            Incoming Russia'n convoy got smashed at eastern entrance of Kyiv by
            Ukraine forces
            <br />
            ロシア軍の車列がウクライナ軍によりキーウの東側入口で破壊された。T-72
          </Popup>
          <Circle center={position2} radius={2 * 1000} />
        </Marker>
        <Marker position={[map3.longitude, map3.latitude]}>
          <Popup>
            <TwitterTweetEmbed tweetId={map3.twitterId} />
            {map3.explanation}
            <TwitterTweetEmbed tweetId={'1505844513146822658'} />
          </Popup>
        </Marker>
        {listItems}
      </MapContainer>
    );
  }
}

class MapMemo {
  constructor(longitude, latitude, twitterId, explanation, twitterUrl) {
    this.longitude = longitude;
    this.latitude = latitude;
    this.twitterId = twitterId;
    this.explanation = explanation;
    this.twitter = this.getTwitter(twitterUrl);
  }
  getTwitter(twitterUrl) {
    return twitterUrl + 3;
  }
}
