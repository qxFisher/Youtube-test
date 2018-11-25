import ui from './ui'; // eslint-disable-line

class Request {
  constructor() {
    this.MAX_RESULTS = '15';
    this.KEY = 'AIzaSyCAPIO5MgtciOBx79hI1QcClEVXG9FD8PQ';
    this.STATISTIC_URL = `https://www.googleapis.com/youtube/v3/videos?key=${this.KEY}&part=snippet,contentDetails,statistics&id=`;
    this.PAGE_TOKEN = null;
    this.NEXT_PAGE = `https://www.googleapis.com/youtube/v3/search?key=${this.KEY}&part=snippet&type=video&maxResults=${this.MAX_RESULTS}&pageToken=`;
    this.DATA = [];
  }

  makeVideosUrl(query) {
    this.VIDEOS_URL = `https://www.googleapis.com/youtube/v3/search?key=${this.KEY}&q=${query}&part=snippet&maxResults=${this.MAX_RESULTS}&type=video`;
    if (this.PAGE_TOKEN !== null) {
      this.NEXT_PAGE = `${this.NEXT_PAGE}${this.PAGE_TOKEN}`;
      return this.NEXT_PAGE;
    }
    return this.VIDEOS_URL;
  }

  makeRequest(url, token) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.makeNextPageURL(data.nextPageToken); return data.items.map(item => item.id.videoId);
      })
      .then(ids => fetch(this.STATISTIC_URL + ids))
      .then(res => res.json())
      .then((data) => {
        if (!token) this.renderPage(data.items);
        else this.refreshPages(data.items);
      });
  }

  renderPage(vid) {
    this.DATA.push(vid);
    ui.renderVideos(vid);
    ui.createNavigation();
  }

  refreshPages(vid) {
    this.DATA.push(vid);
    ui.addPages(vid);
  }

  makeNextPageURL(pt) {
    this.PAGE_TOKEN = pt;
    this.NEXT_PAGE = `${this.NEXT_PAGE}${this.PAGE_TOKEN}`;
    return this.NEXT_PAGE;
  }

  getData() {
    return this.DATA;
  }
}

export default new Request();
