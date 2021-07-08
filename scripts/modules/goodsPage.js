import getGoods from './getGoods.js';
import renderGoodsList from './renderGoodsList.js';

const goodsPage = () => {

    try {
        const goodsList = document.querySelector('.goods__list');
    
        if (!goodsList) {
            throw 'This is Not a goods page!';
        }

        const goodsTitle = document.querySelector('.goods__title');
        const navigationLinks = document.querySelectorAll('.navigation__link');
        let hash = location.hash.substring(1);
    
        const changeTitle = () => {
            navigationLinks.forEach(link => {
                if (link.href === location.href) {
                    goodsTitle.textContent = link.textContent;
                }
            });
        };
    
        changeTitle();
            
        getGoods(renderGoodsList, 'category', hash);

        window.addEventListener('hashchange', () => {
            hash = location.hash.substring(1);
            changeTitle();
            getGoods(renderGoodsList, 'category', hash);
        });
        
    } catch(error) {
        console.warn(error);
    }

};

export default goodsPage;