export class MarkerData {
  constructor({
    longitude,
    latitude,
    twitterId,
    explanation = '',
    tags = [],
    radiusKm = 0,
  }) {
    this.longitude = longitude;
    this.latitude = latitude;
    this.twitterId = this.getTwitter(twitterId);
    this.explanation = explanation;
    this.tags = tags;
    this.radiusKm = radiusKm;
  }
  getTwitter(twitterId) {
    return twitterId;
  }
}
