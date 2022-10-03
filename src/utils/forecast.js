const request = require('request')

const forecast= (latitutde, longitude ,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5e4dcdea0277f5f9c08b6b65ab8bbbb9&query='+latitutde+','+longitude+'&units=f'

    request({url, json: true},(error, { body }) => {
        if(error){
            callback('Unable to connect to forecase servercs!', undefined)
        }else if(body.error){
            callback('Location not found!')
        } else {
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently '+ body.current.temperature + ' faranhite out. It feels like ' + body.current.feelslike + ' faranhite out.')
        }

    })

}

module.exports = forecast