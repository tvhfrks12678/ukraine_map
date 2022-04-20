export class TweetMemoEntity {
  constructor({ id, latitude, longitude, twitterId, explanation, tags }) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.twitterId = twitterId;
    this.explanation = explanation;
    this.tags = tags;
  }

  static getByQueryDocumentSnapshot = (queryDocumentSnapshot) => {
    const data = queryDocumentSnapshot.data();
    const tweetMemo = new TweetMemoEntity({
      id: queryDocumentSnapshot.id,
      latitude: data.latitude,
      longitude: data.longitude,
      twitterId: data.twitterId,
      explanation: data.explanation,
      tags: data.tags,
    });

    return tweetMemo;
  };

  static getListByquerySnapshot = (querySnapshot) => {
    let tweetMemos = [];
    querySnapshot.forEach((doc) => {
      const tweetMemo = TweetMemoEntity.getByQueryDocumentSnapshot(doc);
      tweetMemos.push(tweetMemo);
    });

    return tweetMemos;
  };
}
