let axios = require("axios")

const getTemp = async function (req, res) {
    try {
        //creating an array of cities 
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        cityObjArr = []
        for (let i = 0; i < cities.length; i++) {
            let cityObj = { city: cities[i] }

            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=7cdc44a669ade1e257b2061044caad50`
            }
            let result = await axios(options)
            //console.log(result.data.main.temp);
            cityObj.temp = result.data.main.temp
            cityObjArr.push(cityObj)

        }
        cityObjArr.sort((a, b) => { return (a.temp - b.temp) })
        //console.log(sortByTemp);

        res.status(200).send({ msg: cityObjArr })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getTemp = getTemp