const countryName = CurrentCountry().then(country => {
    console.log(country.nativeName);
}).catch((err) => {
    console.log(err)
});


// const country = getLocation().then((location) => {
//     console.log(location);
//     return getCountry(location.country);
// }).then(country => {
//     console.log(country.nativeName);
// }).catch((err) => {
//     console.log(err)
// });