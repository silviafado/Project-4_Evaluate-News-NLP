// Personal API Key for OpenWeatherMap API
let baseURL='file:///Users/silviafado/Documents/GitHub/fend2/projects/weather-journal-app/website/index.html';
let apiKey='1111cbdcf8fc8f48d8f36f640aab97dc';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    const newZip=document.getElementById('zip').value;
    getZip(baseURL,newZip,apiKey)
}

/* Function to GET Web API Data*/
const getZip=async(baseURL,zip,apiKey)=>{
    const res=await fetch(baseURL,zip,apiKey)
    try{
        const data=await res.json();
        console.log(data);
        return data;
    }catch(error){
        console.log("error", error);
    }
}

/* Function to POST data and update UI */
.then(function(data)){
    console.log(data);
    postData('addEntry,{temperature:data.temperature, date:data.date, userResponse:data.userResponse');
    updateUI();
}

const postData=async(url='', data={})=>{
    const response=await fetch(url, {
    method:'POST',
    credentials:'same-origin',
    headers:{
        'Content-Type':'application.json',
    },
    body: JSON.stringify(data),
    });
    try{
        const newData=await response.json();
        console.log(newData);
        return newData
    }catch(error){
        console.log("error",error)
    }
}

const updateUI=async()=>{
    const request=await fetch('/all')
    try{
        const allData=await request.json();
        console.log(allData);
        document.getElementById('temp').innerHTML=allData[0].temperature;
        document.getElementById('date').innerHTML=allData[0].date;
        document.getElementById('content').innerHTML=allData[0].userResponse;
    }catch(error){
        console.log("error",error);
    }

}


/* Function to GET Project Data */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();