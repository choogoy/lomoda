import getData from './getData.js';

const getGoods = (callback, prop, value) => {

    getData()
        .then(data => {
            if (value) {
                callback(data.filter(item => item[prop] === value));
            } else {
                callback(data);
            }
        })
        .catch(err => {
            console.error(err);
        });

};

export default getGoods;