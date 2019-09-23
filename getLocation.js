const getLocation = async () => {
    const res = await fetch('http://ipinfo.io/json?token=b26071b0b24b53', {});
    if (res.status === 200) {
        const data = await res.json();
        return data;
    } else {
        throw new Error('Unable to fetch data!!!');
    }
}

const getCountry = async (countryCode) => {
    const res = await fetch('https://restcountries.eu/rest/v2/all', {});
    if (res.status === 200) {
        const data = await res.json();
        return data.find(el => {
            return el.alpha2Code === countryCode;
        });
    } else {
        throw new Error('Unable to fetch data!!!');
    }
}


const CurrentCountry = async () => {
    const location = await getLocation();
    return await getCountry(location.country);
}
