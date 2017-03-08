

  //var app = new Vue({
    //el: '#app',
    //data: {
      //message: 'Hello Vue'
    //}
  //});


   //hourlyWidget
   var hourlyWidget = new Vue({
     el: '#hourly',
     data: {
       summary: "its gonna rain!",
       icon: "clear-night",
       hours: []
     },
     methods: {
       getMainIcon: function(){
         return `/images/${this.icon}.png`;
       },
       getHourlyIcon: function(iconString){
         return `/images/${iconString}.png`;
       },
       getDate: function(seconds){
         var date = new Date(seconds * 1000);
         var month = date.getMonth();
         var year = date.getFullYear();
         var day = date.getDate();
         var hour = date.getHours();
         var minutes = date.getMinutes();
        return `${month + 1}/${day}/${year} ${hour}:${minutes < 9 ? '0' + minutes : minutes}`;
      },
      getHourlyWeather: function(lat, lon){
        var url = `/weather/${lat},${lon}`;
        axios.get(url)
            .then(function(response){
              var hourlyData = response.data.hourly;
              console.log(hourlyData);
              this.summary = hourlyData.summary;
              this.icon = hourlyData.icon;
              this.hours = hourlyData.data;
            }.bind(this))
            .catch(function(err){
              console.log(err);
            });
      },
      updateWeather: function(){
        this.getHourlyWeather(this.latitude, this.longitude);
      }
    },
    created: function(){
      this.getHourlyWeather(29.1, -84.1);
    }
  });




  //currentlyWidget
  var currentlyWidget = new Vue({
    el: '#currently',
    data: {
      time: 1000000,
      summary: 'Partly Cloudy',
      icon: 'partly-cloudy',
      apparentTemperature: 67.4,
      precipProbability: 0.30,
      humidity: 0.61,
      location: 'Gainesville, FL',
      latitude: 29.1,
      longitude: -81.4
    },
    methods: {
      iconUrl: function(iconString){
        return `/images/${iconString}.png`;
      },

      getDate: function(seconds){
        var date = new Date(seconds * 1000);
        var month = date.getMonth();
        var year = date.getFullYear();
        var day = date.getDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        return `${month + 1}/${day}/${year} ${hour}:${minutes < 9 ? '0' + minutes : minutes}`;
     },

      getWeather: function(lat, lon){
        var url = `/weather/${lat},${lon}`;
        axios.get(url)
            .then(function(response){
              var data = response.data.currently;
              currentlyWidget.time = data.time;
              currentlyWidget.summary = data.summary;
              currentlyWidget.icon = data.icon;
              currentlyWidget.apparentTemperature = data.apparentTemperature;
              currentlyWidget.precipProbability = data.precipProbability;
              currentlyWidget.humidity = data.humidity;
            })
            .catch(function(err){
              console.log(err);
            });
      },

      updateWeather: function(){
        this.getWeather(this.latitude, this.longitude);
      }



    },
    created: function(){
      this.getWeather(29.1, -84.4);
    }
  });




  //dailyWidget

   var dailyWidget = new Vue({
     el: '#daily',
     data: {
             summary: 'Partly Cloudy',
             icon: 'partly-cloudy',
            days: [],
          },
     methods: {
       iconUrl: function(iconString){
         return `/images/${iconString}.png`;
       },
       getMainIcon: function(){
                return `/images/${this.icon}.png`;
              },
        getDate: function(seconds){
          var date = new Date(seconds * 1000);
          var month = date.getMonth();
          var year = date.getFullYear();
          var day = date.getDate();
          var hour = date.getHours();
          var minutes = date.getMinutes();
          //return `${month}/${day}/${year} ${hour}:${minutes}`;
         //new
         return `${month + 1}/${day}/${year}`;
         //var stuff = `${month + 1}/${day}/${year}`;
         //console.log(stuff);
       },

      getDailyWeather: function(lat, lon){
  var url = `/weather/${lat},${lon}`;
  axios.get(url)
      .then(function(response){
        var dailyData = response.data.daily;
        console.log(dailyData);
        this.summary = dailyData.summary;
        this.icon = dailyData.icon;
        this.apparentTemperatureMax = dailyData.apparentTemperatureMax;
        this.apparentTemperatureMin = dailyData.apparentTemperatureMin;
        this.days = dailyData.data;


      }.bind(this))
      .catch(function(err){
        console.log(err);
      });
},
updateWeather: function(){
  this.getDailyWeather(this.latitude, this.longitude);
}
},
created: function(){
  this.getDailyWeather(29.1, -84.4);
}
});



 //minutelyWidget
 var minutelyWidget = new Vue({
   el: '#minutely',
   data: {
           summary: 'Partly Cloudy',
           icon: 'partly-cloudy',
           minutes: [],
        },
   methods: {
      iconUrl: function(iconString){
        return `/images/${iconString}.png`;
      },
      getMainIcon: function(){
               return `/images/${this.icon}.png`;
             },
      getDate: function(seconds){
        var date = new Date(seconds * 1000);
        var month = date.getMonth();
        var year = date.getFullYear();
        var day = date.getDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
       return `${month + 1}/${day}/${year} ${hour}:${minutes < 9 ? '0' + minutes : minutes}`;
     },

    getDailyWeather: function(lat, lon){
var url = `/weather/${lat},${lon}`;
axios.get(url)
    .then(function(response){
      var minutelyData = response.data.minutely;
      console.log(minutelyData);
      //this.summary = dailyData.summary;
      this.icon = minutelyData.icon;
      this.precipProbability = minutelyData.precipProbability;
      this.apparentTemperatureMin = minutelyData.precipIntensity;
      this.minutes = minutelyData.data;


    }.bind(this))
    .catch(function(err){
      console.log(err);
    });
},
updateWeather: function(){
  this.getDailyWeather(this.latitude, this.longitude);
}
},
created: function(){
this.getDailyWeather(29.1, -84.4);
}
});
