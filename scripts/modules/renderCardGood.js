import generateList from './generateList.js';

const renderCardGood = ([{ brand, name, cost, color, sizes, photo }]) => {

    const cardGoodImage = document.querySelector('.card-good__image');
    const cardGoodBrand = document.querySelector('.card-good__brand');
    const cardGoodTitle = document.querySelector('.card-good__title');
    const cardGoodPrice = document.querySelector('.card-good__price');
    const cardGoodColor = document.querySelector('.card-good__color');
    const cardGoodSelectWrapper = document.querySelectorAll('.card-good__select__wrapper');
    const cardGoodColorList = document.querySelector('.card-good__color-list');
    const cardGoodSizes = document.querySelector('.card-good__sizes');
    const cardGoodSizesList = document.querySelector('.card-good__sizes-list');
    const cardGoodBuy = document.querySelector('.card-good__buy');

    cardGoodImage.src = `goods-image/${photo}`;
    cardGoodImage.alt = `${brand} ${name}`;
    cardGoodBrand.textContent = brand;
    cardGoodTitle.textContent = name;
    cardGoodPrice.textContent = `${cost} ₽`;

    if (color) {
        cardGoodColor.textContent = color[0];
        cardGoodColor.dataset.id = 0;
        cardGoodColorList.innerHTML = generateList(color);
    } else {
        cardGoodColor.style.display = 'none';
    }

    if (sizes) {
        cardGoodSizes.textContent = sizes[0];
        cardGoodSizes.dataset.id = 0;
        cardGoodSizesList.innerHTML = generateList(sizes);
    } else {
        cardGoodSizes.style.display = 'none';
    }

    cardGoodSelectWrapper.forEach(item => {
        item.addEventListener('click', event => {
            const target = event.target;

            if (target.closest('.card-good__select')) {
                target.classList.toggle('card-good__select__open');
            }

            if (target.closest('.card-good__select-item')) {
                const cardGoodSelect = item.querySelector('.card-good__select');
                cardGoodSelect.textContent = target.textContent;
                cardGoodSelect.dataset.id = target.dataset.id;
                cardGoodSelect.classList.remove('card-good__select__open');
            }
        });
    });
};

export default renderCardGood;