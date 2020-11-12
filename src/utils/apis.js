import { SAEGMENT_URL, COMBINE_URL } from '../constants/endpoints';

class BaseApi {
  static post(url, data) {
    const baseUrl = `${process.env.REACT_APP_API_URL.trim()}${url}`;
    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    });
  }
}

class VideoApi extends BaseApi {
  static segment(videoData) {
    const [videoLink, , interval] = videoData;
    const data = {
      video_link: videoLink.value,
      interval_duration: +interval.value,
    };
    return this.post(SAEGMENT_URL, data);
  }

  static combine(videoSegments, dimentions) {
    const segments = videoSegments.map((segment) => {
      const [videoLink, start, end] = segment;
      return {
        video_url: videoLink.value,
        start: +start.value,
        end: +end.value,
      };
    });
    const [width, height] = dimentions;
    const data = {
      segments,
      width: +width.value,
      height: +height.value,
    };
    return this.post(COMBINE_URL, data);
  }
}

export default VideoApi;
