function GetInfo() {
   
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = newName.value.toUpperCase();

if (newName.value == "") {
        alert("Enter a City Name !");
        location.reload();
    } else {
       
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newName.value + '&appid=ab88314ba4b67ce6524a19413aeec488')
            .then(response => response.json())
            .then(data => {

                //Getting the min and max values for each day
                {
                    document.getElementById("c_t").innerHTML = Math.round(data.list[0].main.temp - 273.15) - 2 + "°";
                    document.getElementById("f_l").innerHTML = Math.round(data.list[0].main.feels_like - 273.15) - 2 + "°";
                    document.getElementById("hu").innerHTML = Math.round(data.list[0].main.humidity) + "%";
                    document.getElementById("air").innerHTML = Math.round(data.list[0].main.pressure) + " hPa";
                    document.getElementById("wind").innerHTML = (data.list[0].wind.speed).toFixed(2) + " mi/h";
                    document.getElementById("des_t").innerHTML = (data.list[0].weather[0].main);

                    //Number(1.3450001).toFixed(2); // 1.35

                }

                for (i = 0; i < 5; i++) {
                    document.getElementById("dayt" + (i + 1)).innerHTML = "Temp: " + Number(data.list[i].main.temp - 273.15).toFixed(1) + "°";

                }

                {
                    document.getElementById("img_t").src = "Public/Images/" + data.list[0].weather[0].icon
                        + ".png";
                }
                for (i = 0; i < 5; i++) {
                    document.getElementById("img" + (i + 1)).src = "Public/Images/" +  data.list[i].weather[0].icon
                        + ".png";
                }
                for (i = 0; i < 5; i++) {
                    document.getElementById("des_t" + (i + 1)).innerHTML = (data.list[i].weather[0].main);
                }


                //------------------------------------------------------------
                console.log(data);


            })
            .catch(err => alert("something went wrong"))

            
    }
}
document.getElementById("cityInput").addEventListener("keydown", function(event){
    if(event.key==="Enter"){
        GetInfo();
    }
})

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

{
        document.getElementById("daytd").innerHTML = d.toDateString();
    }


    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }


