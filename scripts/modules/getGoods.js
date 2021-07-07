import getData from './getData.js';

const getGoods = (callback, value) => {

    getData()
        .then(data => {
            if (value) {
                callback(data.filter(item => item.category === value));
            } else {
                callback(data);
            }
        })
        .catch(err => {
            console.error(err);
        });

};

export default getGoods;