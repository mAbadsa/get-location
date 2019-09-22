const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=b26071b0b24b53', {}).then(res => {
        if(res.status === 200 ){
            return res.json();
        } else {
            throw new Error('Unable to fetch data!!!');
        }
    }).then(location => {
        return location;
    })
}

const getCountry = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all', {}).then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error('Unable to fetch data!!!');
        }
    }).then(data => {
        return data.find(el => {
            return el.alpha2Code === countryCode;
        });
    })
}