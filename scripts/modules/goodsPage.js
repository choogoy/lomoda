import getGoods from './getGoods.js';
import renderGoodsList from './renderGoodsList.js';

const goodsPage = () => {

    const goodsTitle = document.querySelector('.goods__title');
    let hash = location.hash.substring(1);

    const navigationLinks = document.querySelectorAll('.navigation__link');

    const changeTitle = () => {
        navigationLinks.forEach(link => {
            if (link.href === location.href) {
                goodsTitle.textContent = link.textContent;
            }
        });
    };

    changeTitle();

    try {
        const goodsList = document.querySelector('.goods__list');
    
        if (!goodsList) {
            throw 'This is Not a goods page!';
        }
            
        getGoods(renderGoodsList, hash);

        window.addEventListener('hashchange', () => {
            hash = location.hash.substring(1);
            changeTitle();
            getGoods(renderGoodsList, hash);
        });
        
    } catch(error) {
        console.warn(error);
    }

};

export default goodsPage;