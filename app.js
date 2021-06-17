'use strict';

searchButton.addEventListener('click',search)

function search(){
    var cityName= searchCity.value
    if(cityName.trim().length ==0)
    return alert('Please enter the city')
    var http=new XMLHttpRequest()
    var key='d0a1fbf9f6fcf283cc916fdc339bc4cc'
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + key;
    var method='GET';
    http.open(method ,url)
    http.onreadystatechange =function(){
        if(http.readyState == XMLHttpRequest.DONE &&http.status ===200){
            var data=JSON.parse(http.responseText)
            var weatherData=new Weather(cityName,data.weather[0].description.toUpperCase())
            weatherData.temperature=data.main.temp
            update(weatherData)
            console.log(weatherData)
        }else if(http.readyState == XMLHttpRequest.DONE){
            alert('something went wrong')
        }
    }
    http.send();

}

function update(weatherData){
    weatherCity.textContent =weatherData.cityName
    weatherDescription.textContent=weatherData.description
    weatherTemperature.textContent=weatherData.temperature
    weatherBox.style.display='block'
    loadingText.style.display
}


