import getGoods from './getGoods.js';
import renderCardGood from './renderCardGood.js';

const goodCard = () => {

    try {
        
        if (!document.querySelector('.card-good')) {
            throw 'This is Not a card-good page!';
        }

        let hash = location.hash.substring(1);

        getGoods(renderCardGood, 'id', hash);

    } catch (error) {
        console.warn(error);
    }

};

export default goodCard;