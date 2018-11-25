
import './style/normalize.scss';
import './style/style.scss';
import utils from './components/utils';
import request from './components/request';
import ui from './components/ui';

function userRequest(event) {
  event.preventDefault();
  if (utils.$('.container')) ui.resetUi();
  const searchInput = utils.$('.search-form__input');
  const userInput = searchInput.value;
  const url = request.makeVideosUrl(userInput);
  request.makeRequest(url);
  this.blur();
}

ui.createSearchForm();

const searchButton = utils.$('.search-form__button');
searchButton.addEventListener('click', userRequest);

window.addEventListener('resize', ui.rebuild.bind(ui));
