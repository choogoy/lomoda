const generateList = data => data.reduce((html, item, index) => html + `<li class="card-good__select-item" data-id="${index}">${item}</li>`, '');

export default generateList;