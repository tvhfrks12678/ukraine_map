import React from 'react';
import { MarkerData } from './MarkerData';
import { MarkerPopup } from './MarkerPopup';

export const PopupList = () => {
  const data = [
    {
      longitude: '50.4925664',
      latitude: '30.365479',
      twitterId: '1504492667283062789',
      explanation: 'キーウ',
      radiusKm: 0,
    },
    {
      longitude: '53.115596',
      latitude: '26.032273',
      twitterId: '1504408541100404736',
      explanation:
        'S-300またはS-400ミサイルシステム用ミサイルの輸送がBaranavichy（Brest地方）で目撃された。少なくとも8発のミサイルが「V」マークの付いたロシアのKamAZトラック2台で輸送された。ナンバープレートに第25地区（ロシア東部軍管区）が記載されていた',
      radiusKm: 100,
    },
    {
      longitude: '50.580141',
      latitude: '30.834326',
      twitterId: '1501834317139484673',
      explanation:
        'ロシア軍の車列がウクライナ軍によりキーウの東側入口で破壊された。T-72',
      radiusKm: 2,
    },
    {
      longitude: '50.50371791524624',
      latitude: '30.417049681025052',
      twitterId: '1505842872448430086',
      explanation: '廃墟',
      radiusKm: 0,
    },
    {
      longitude: '46.64216281532372',
      latitude: '32.61028110882802',
      twitterId: '1506043718977134602',
      explanation:
        'ロシア軍はウクライナのヘルソンのスーパーマーケットの「Silpo」で略奪',
      radiusKm: 0,
    },
    {
      longitude: '51.8669444',
      latitude: '33.5244444',
      twitterId: '1503427182605000713',
      explanation:
        'シュミ州のショストカ市にある「インパルス」爆薬工場が被災しました',
      radiusKm: 0,
    },
    {
      longitude: '50.60440601386755',
      latitude: '30.312805652286137',
      twitterId: '1506211691490590720',
      explanation:
        'ウクライナ軍は、キーウから約40km離れた戦略上重要なモシュン村を制圧した。その近郊では、2週間前から激しい戦闘が繰り広げられていた。',
      radiusKm: 0,
    },
    {
      longitude: '50.50371791524624',
      latitude: '30.417049681025052',
      twitterId: '1505842872448430086',
      explanation: '廃墟',
      radiusKm: 0,
    },
  ];
  const mapDataList = data.map((value) => {
    return new MarkerData({
      longitude: value.longitude,
      latitude: value.latitude,
      twitterId: value.twitterId,
      explanation: value.explanation,
      radiusKm: value.radiusKm,
    });
  });
  const list = mapDataList.map((mapData, index) => {
    return <MarkerPopup mapData={mapData} key={index} />;
  });
  return list;
};