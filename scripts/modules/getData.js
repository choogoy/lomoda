const getData = async () => {
    const data = await fetch('db.json');
    if (data.ok) {
        return data.json();
    } else {
        throw new Error(`Данные не были получены... Ошиба ${data.status} ${data.statusText}`);
    }
};

export default getData;