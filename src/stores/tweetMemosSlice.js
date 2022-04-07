import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    longitude: '50.580141',
    latitude: '30.834326',
    twitterId: '1501834317139484673',
    explanation:
      'ロシア軍の車列がウクライナ軍によりキーウの東側入口で破壊された。',
    tags: ['キーウ', 'T-72'],
  },
  {
    id: '2',
    longitude: '46.64216281532372',
    latitude: '32.61028110882802',
    twitterId: '1506043718977134602',
    explanation:
      'ロシア軍はウクライナのヘルソンのスーパーマーケットの「Silpo」で略奪',
    tags: ['ヘルソン', 'スーパー', '略奪'],
  },
  {
    id: '3',
    longitude: '51.8669444',
    latitude: '33.5244444',
    twitterId: '1503427182605000713',
    explanation:
      'スームィ州のショストカ市にある「インパルス」爆薬工場が被災しました',
    radiusKm: 0,
    tags: ['スームィ', '工場', '破壊'],
  },
  {
    id: '4',
    longitude: '50.60440601386755',
    latitude: '30.312805652286137',
    twitterId: '1506211691490590720',
    explanation:
      'ウクライナ軍は、キーウから約40km離れた戦略上重要なモシュン村を制圧した。その近郊では、2週間前から激しい戦闘が繰り広げられていた。',
    radiusKm: 0,
    tags: ['キーウ', '奪還'],
  },
  {
    id: '5',
    longitude: '53.115596',
    latitude: '26.032273',
    twitterId: '1504408541100404736',
    explanation:
      'S-300またはS-400ミサイルシステム用ミサイルの輸送がBaranavichy（Brest地方）で目撃された。少なくとも8発のミサイルが「V」マークの付いたロシアのKamAZトラック2台で輸送された。ナンバープレートに第25地区（ロシア東部軍管区）が記載されていた',
    tags: ['S-300', 'ベラルーシ'],
  },
  {
    id: '6',
    longitude: '44.619508',
    latitude: '33.506876',
    twitterId: '1506357313548042243',
    explanation:
      'クリミアのセヴァストーポリでロシアの21631型小型ミサイル艦がKalibr-NK巡航ミサイルをウクライナ軍に向けて発射',
    radiusKm: 2000,
    tags: ['黒海', 'Kalibr-NK'],
  },
  {
    id: '7',
    longitude: '46.749590',
    latitude: '36.773788',
    twitterId: '1506952240715776009',
    explanation: 'ロシア海軍の揚陸艦を破壊',
    tags: ['アゾフ海', '破壊', '揚陸艦'],
  },
];

const tweetMemosSlice = createSlice({
  name: 'tweetMemos',
  initialState,
  reducers: {
    tweetMemosInitialization() {
      return initialState;
    },
    tweetMemosTagSearch(state, action) {
      const searchTag = action.payload;
      return initialState.filter((tweetMemo) => {
        return tweetMemo.tags.includes(searchTag);
      });
    },
  },
});

export const { tweetMemosInitialization, tweetMemosTagSearch } =
  tweetMemosSlice.actions;

export default tweetMemosSlice.reducer;