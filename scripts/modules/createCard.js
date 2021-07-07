const createCard = ({ id, cost, preview, name, brand, sizes }) => {
    const li = document.createElement('li'); 
    li.classList.add('goods__item');

    li.innerHTML = `
        <article class="good">
            <a class="good__link-img" href="card-good.html#${id}">
                <img class="good__img" src="goods-image/${preview}" alt="${name}">
            </a>
            <div class="good__description">
                <p class="good__price">${cost} &#8381;</p>
                <h3 class="good__title">${brand} <span class="good__title__grey">/ ${name}</span></h3>
                ${sizes ? `<p class="good__sizes">Размеры (RUS): <span class="good__sizes-list">${sizes.join(' ')}</span></p>` : '' }
                <a class="good__link" href="card-good.html#${id}">Подробнее</a>
            </div>
        </article>`;

    return li;
};

export default createCard;