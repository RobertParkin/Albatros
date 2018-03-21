function getWeather(default_town) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(getWeatherPosition, function(error){getWeatherTown(default_town)});
  } else {
  }
}

getWeather("La-Rochelle");

function getWeatherPosition(position){
  var pos_lat = position.coords.latitude;
  var pos_long = position.coords.longitude;
  $.getJSON('http://api.apixu.com/v1/current.json?key=3db34491c4af45fbbba73849182103&q='+pos_lat+','+pos_long, function(data){
    console.log(data);
    var icon_url = data.current.condition.icon.replace('//cdn.apixu.com/', 'img/');
    $('h1').first().after("<img src="+icon_url+">");
  })
}
function getWeatherTown(town){
  $.getJSON('http://api.apixu.com/v1/current.json?key=3db34491c4af45fbbba73849182103&q='+town+'', function(data){
    console.log(data);
    var icon_url = data.current.condition.icon.replace('//cdn.apixu.com/', 'img/');
    $('h1').first().after("<img src="+icon_url+">");
  })
}
