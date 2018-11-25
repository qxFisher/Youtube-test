import utils from './utils';
import request from './request'; // eslint-disable-line

class Ui {
  constructor() {
    this.data = [];
    this.resultsPerPage = 4;
    this.resultsPerPageOld = 0;
    this.pagesCount = 0;
    this.currentScreen = 'none';
    this.previousWidth = 0;

    this.startX = 0;
    this.endX = 0;
    this.startTime = 0;
    this.endTime = 0;
    this.swipeMinLength = 100;
    this.swipeMaxDuration = 800;
  }

  renderVideos(vid) {
    this.default = null;
    const container = utils.create('div');
    utils.addClass(container, 'container');
    container.addEventListener('mousedown', this.downEvent.bind(this));
    container.addEventListener('mouseup', this.upEvent.bind(this));
    container.addEventListener('touchstart', this.downEvent.bind(this));
    container.addEventListener('touchend', this.upEvent.bind(this));
    utils.append(utils.$('body'), container);

    const slider = utils.create('div');
    utils.addClass(slider, 'slider');
    utils.append(utils.$('.container'), slider);

    const itemContainer = utils.create('div');
    utils.addClass(itemContainer, 'item-container');
    utils.append(utils.$('.slider'), itemContainer);

    const renderVideos = videos => videos.reduce((acc, video) => utils.append(acc, utils.inner(utils.addClass(utils.create('div'), 'item'), `
    <div class="item__header">
      <img src="${video.snippet.thumbnails.medium.url}" alt="" height="180" width="320">
    </div>
    <div class="item__information">
      <ul class="item__list">
        <a href="https://www.youtube.com/watch?v=${video.id}"><li class="item__general item__title">${video.snippet.title}</li></a>
        <li class="item__general item__author"><i class="fa fa-address-card"></i> ${video.snippet.channelTitle}</li>
        <li class="item__general item__date"><i class="fa fa-calendar"></i> ${video.snippet.publishedAt.substr(0, 9)}</li>
        <li class="item__general item__views"><i class="fa fa-eye"></i> ${video.statistics.viewCount}</li>
        <li class="item__description"> ${video.snippet.description.substr(0, 180)}</li>
      </ul>
    </div>
    `)), utils.$('.item-container'));
    renderVideos(vid);
  }

  addPages(vid) {
    this.default = null;
    const pages = this.calculatePages();
    const renderVideos = videos => videos.reduce((acc, video) => utils.append(acc, utils.inner(utils.addClass(utils.create('div'), 'item'), `
    <div class="item__header">
      <img src="${video.snippet.thumbnails.medium.url}" alt="" height="180" width="320">
    </div>
    <div class="item__information">
      <ul class="item__list">
        <a href="https://www.youtube.com/watch?v=${video.id}"><li class="item__general item__title">${video.snippet.title}</li></a>
        <li class="item__general item__author"><i class="fa fa-address-card"></i> ${video.snippet.channelTitle}</li>
        <li class="item__general item__date"><i class="fa fa-calendar"></i> ${video.snippet.publishedAt.substr(0, 9)}</li>
        <li class="item__general item__views"><i class="fa fa-eye"></i> ${video.statistics.viewCount}</li>
        <li class="item__description"> ${video.snippet.description.substr(0, 180)}</li>
      </ul>
    </div>
    `)), utils.$('.item-container'));
    renderVideos(vid);

    this.refreshNavigationList(pages);
  }

  refreshNavigationList(pages) {
    this.default = this.default;
    const pagesCounter = this.calculatePages();
    const elemsContainer = utils.$('.navigation-list');
    const navigationLi = utils.create('li');
    utils.addClass(navigationLi, 'navigation-list__item');

    for (let i = pages; i < pagesCounter; i += 1) {
      const navigationItem = navigationLi.cloneNode(true);
      navigationItem.innerHTML = i + 1;
      elemsContainer.appendChild(navigationItem);
    }
  }

  createSearchForm() {
    this.createMediaQueries();
    const form = utils.create('form');
    utils.addClass(form, 'search-form');
    const input = utils.create('input');
    utils.addClass(input, 'search-form__input');
    const button = utils.create('button');
    utils.addClass(button, 'search-form__button');
    const icon = utils.create('i');
    utils.addClass(icon, 'fa');
    utils.addClass(icon, 'fa-search');

    utils.append(utils.$('body'), form);
    utils.append(utils.$('.search-form'), input);
    utils.append(utils.$('.search-form'), button);
    utils.append(utils.$('.search-form__button'), icon);
  }

  createNavigation() {
    this.createMediaQueries();
    const body = utils.$('body');
    const navigation = utils.create('div');
    navigation.className = 'navigation';
    utils.append(body, navigation);

    const navigationList = utils.create('ul');
    navigationList.className = 'navigation-list';

    utils.append(navigation, navigationList);
    this.createNavigationList();
    this.previousWidth = document.querySelector('.item-container').clientWidth;
    navigationList.addEventListener('click', this.pageChange);
  }

  createNavigationList() {
    this.default = null;

    const itemContainer = document.querySelector('.item-container');
    const itemContainerWidth = itemContainer.clientWidth;
    const pagesCounter = this.calculatePages();
    if (!itemContainer.style.left) { itemContainer.style.left = '0px'; }

    let left = Math.abs(parseInt(itemContainer.style.left, 10));
    if (left !== 0) {
      const colOfSwipes = Math.abs(Math.ceil(left / this.prePreviousWidth));
      const elem = colOfSwipes * this.resultsPerPageOld;
      const needSwipes = Math.round(elem / this.resultsPerPage);
      left = needSwipes * itemContainerWidth;
      itemContainer.style.left = `-${left}px`;
    }

    const activeItem = Math.floor(left / itemContainerWidth);

    const elemsContainer = utils.$('.navigation-list');
    const navigationLi = utils.create('li');
    utils.addClass(navigationLi, 'navigation-list__item');

    for (let i = 0; i < pagesCounter; i += 1) {
      const navigationItem = navigationLi.cloneNode(true);
      navigationItem.innerHTML = i + 1;
      elemsContainer.appendChild(navigationItem);
    }
    elemsContainer.children[activeItem].classList.add('navigation-list__item--active');
    elemsContainer.children[activeItem + 1].classList.add('navigation-list__item--next');
    if (activeItem !== 0) elemsContainer.children[activeItem - 1].classList.add('navigation-list__item--prev');

    utils.$('.navigation').appendChild(elemsContainer);
  }

  rebuild() {
    this.resultsPerPageOld = this.resultsPerPage;
    this.createMediaQueries();

    const itemContainer = utils.$('.item-container');
    if (itemContainer) {
      const itemContainerWidth = itemContainer.clientWidth;
      if (this.previousWidth !== itemContainerWidth) {
        this.prePreviousWidth = this.previousWidth;
        const navigationList = document.querySelector('.navigation-list');

        while (navigationList.firstChild) {
          navigationList.removeChild(navigationList.firstChild);
        }
        this.createNavigationList();

        navigationList.addEventListener('click', this.pageChange);
        this.previousWidth = itemContainerWidth;
      }
    }
  }

  pageChange(e) {
    const { target } = e;
    if (target.classList.contains('navigation-list__item')) {
      const slider = document.querySelector('.item-container');
      const current = document.querySelector('.navigation-list__item--active');
      const width = slider.clientWidth;
      if (!slider.style.left) slider.style.left = 0;
      const sliderLeft = parseInt(slider.style.left, 10);
      const currentPos = parseInt(current.innerText, 10);
      const targetPos = parseInt(target.innerText, 10);
      const left = sliderLeft - (targetPos - currentPos) * width;

      current.classList.remove('navigation-list__item--active');
      target.classList.add('navigation-list__item--active');

      slider.style.left = `${left}px`;
      this.style.left = '-10px';

      if (utils.$('.navigation-list__item--next')) utils.$('.navigation-list__item--next').classList.remove('navigation-list__item--next');
      if (utils.$('.navigation-list__item--prev')) utils.$('.navigation-list__item--prev').classList.remove('navigation-list__item--prev');
      const activeItem = Math.abs(Math.floor(left / width));
      const elemsContainer = utils.$('.navigation-list');
      if (elemsContainer.children[activeItem + 1]) elemsContainer.children[activeItem + 1].classList.add('navigation-list__item--next');
      if (activeItem !== 0) elemsContainer.children[activeItem - 1].classList.add('navigation-list__item--prev');

      if (elemsContainer.hasChildNodes()) {
        const children = elemsContainer.childNodes;
        if (activeItem > (children.length - 1) - 5) {
          const url = request.makeVideosUrl();
          request.makeRequest(url, 'Refresh');
        }
      }
    }
  }

  calculatePages() {
    this.pagesCount = Math.ceil(Array.from(utils.$$('.item')).length / this.resultsPerPage);
    return this.pagesCount;
  }

  resetUi() {
    this.data = [];
    utils.$('.container').remove();
    utils.$('.navigation').remove();
  }

  createMediaQueries() {
    const large = window.matchMedia('(min-width: 1025px) and (max-width: 1345px)').matches;
    const small = window.matchMedia('(max-width: 767px)').matches;
    const medium = window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches;
    const max = window.matchMedia('(min-width: 1346px)').matches;
    if (large === true) this.currentScreen = 'large';
    if (medium === true) this.currentScreen = 'medium';
    if (small === true) this.currentScreen = 'small';
    if (max === true) this.currentScreen = 'max';

    const iC = utils.$('.item-container');
    const slider = utils.$('.slider');

    switch (this.currentScreen) {
      case 'max':
        if (iC) {
          iC.style.width = '1360px';
          slider.style.width = '1360px';
        }
        this.resultsPerPage = 4;
        break;
      case 'large':
        if (iC) {
          iC.style.width = '1020px';
          slider.style.width = '1020px';
        }
        this.resultsPerPage = 3;
        break;
      case 'medium':
        if (iC) {
          iC.style.width = '680px';
          slider.style.width = '680px';
        }
        this.resultsPerPage = 2;
        break;
      case 'small':
        if (iC) {
          iC.style.width = '340px';
          slider.style.width = '340px';
        }
        this.resultsPerPage = 1;
        break;
      default:
        break;
    }
  }

  downEvent(e) {
    this.startTime = Date.now();
    this.startX = e.clientX || e.changedTouches[0].clientX;
  }

  upEvent(e) {
    this.endX = e.clientX || e.changedTouches[0].clientX;
    this.endTime = Date.now();
    const swipeLenght = this.endX - this.startX;
    const swipeDuration = this.endTime - this.startTime;
    if (swipeLenght < -this.swipeMinLength && swipeDuration < this.swipeMaxDuration) {
      if (utils.$('.navigation-list__item--next')) utils.$('.navigation-list__item--next').click();
    }

    if (swipeLenght > +this.swipeMinLength && swipeDuration < this.swipeMaxDuration) {
      if (utils.$('.navigation-list__item--prev')) utils.$('.navigation-list__item--prev').click();
    }
  }
}

export default new Ui();
