import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    longitude: '50.4925664',
    latitude: '30.365479',
    twitterId: '1504492667283062789',
    explanation: '工場が火災',
    tweetemb:
      '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Zennは個人開発を脱却してクラスメソッド社のサービスとなりました。<br>僕は引き続きZennの開発を続けます。<br><br>🐥 ZennとClassmethod<a href="https://t.co/jpes7Kbdpz">https://t.co/jpes7Kbdpz</a></p>&mdash; catnose (@catnose99) <a href="https://twitter.com/catnose99/status/1356048923983400964?ref_src=twsrc%5Etfw">February 1, 2021</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    tags: ['工場'],
  },
  {
    id: '2',
    longitude: '53.115596',
    latitude: '26.032273',
    twitterId: '1504408541100404736',
    explanation:
      'S-300またはS-400ミサイルシステム用ミサイルの輸送がBaranavichy（Brest地方）で目撃された。少なくとも8発のミサイルが「V」マークの付いたロシアのKamAZトラック2台で輸送された。ナンバープレートに第25地区（ロシア東部軍管区）が記載されていた',
    tweetemb:
      '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The transportation of missiles for S-300 or S-400 missile systems was spotted in Baranavichy (Brest region). At least 8 missiles were transported in 2 Russian KamAZ trucks with “V” marks. The 25th region (Eastern Military District of Russia) was indicated on license plates. <a href="https://t.co/swwj4fGq8d">pic.twitter.com/swwj4fGq8d</a></p>&mdash; MotolkoHelp (@MotolkoHelp) <a href="https://twitter.com/MotolkoHelp/status/1504408541100404736?ref_src=twsrc%5Etfw">March 17, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    tags: ['S-300'],
  },
];

const markerPopupsSlice = createSlice({
  name: 'markerPopups',

  initialState,
  reducers: {
    markerPopupAdded(state, action) {
      state.push(action.payload);
    },
    // mapUpdated(state, action) {
    //   const { id, longitude, latitude, twitterId, explanation } =
    //     action.payload;
    //   const existingMap = state.find((map) => map.id === id);
    //   if (existingMap) {
    //     existingMap.longitude = longitude;
    //     existingMap.latitude = latitude;
    //     existingMap.twitterId = twitterId;
    //     existingMap.explanation = explanation;
    //   }
    // },
  },
});

// export const { mapAdded, mapUpdated } = mapsSlice.actions;

export default markerPopupsSlice.reducer;
