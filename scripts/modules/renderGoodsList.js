import createCard from './createCard.js';

const renderGoodsList = data => {
    const goodsList = document.querySelector('.goods__list');

    goodsList.textContent = '';

    data.forEach(good => goodsList.append(createCard(good)));
};

export default renderGoodsList;