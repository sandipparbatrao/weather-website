const request = require('request')

const forecast= (latitutde, longitude ,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5e4dcdea0277f5f9c08b6b65ab8bbbb9&query='+latitutde+','+longitude

    request({url, json: true},(error, { body }) => {
        if(error){
            callback('Unable to connect to forecase serveics!', undefined)
        }else if(body.error){
            callback('Location not found!')
        } else {
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently '+ body.current.temperature + ' celsius out. It feels like ' + body.current.feelslike + ' celsius out.' +'The humidity is '+body.current.humidity+'% and chances of rains are ' +body.current.precip + '%')
        }

    })

}

module.exports = forecast