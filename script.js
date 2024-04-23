const loc=document.querySelector('.location');
const desc=document.querySelector('.desc');
const temp=document.querySelector('.temperature');
const wind =document.querySelector('.Wind')
const humidityy=document.querySelector('.Humid')


const searchbar=document.querySelector('.search');
const searchbtn=document.querySelector('.searchbtn');


async function getDetails(q){
    // console.log(q);
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=b41ec3be35c7dac8aabbc21ba253137a`;
    const response=await fetch(url)
    const data=await response.json();
    console.log(data);
    setDetails(data);
}

function setDetails(data){

    loc.innerHTML=`<i class="fa-solid fa-location-dot"></i> ${data.name}`
    desc.innerHTML=`<i class="fa-solid fa-cloud"></i> ${data.weather[0].description}`
    celciustemp=Math.floor(data.main.temp-273.15)
    temp.innerHTML=`<i class="fa-solid fa-temperature-three-quarters"></i> ${celciustemp} <sup>o</sup> C`
    wind.innerHTML=`<i class="fa-solid fa-wind"></i> ${data.wind.speed} km/hr`
    humidityy.innerHTML=`<i class="fa-solid fa-droplet"></i> ${data.main.humidity} %`
}

searchbtn.addEventListener('click',()=>{
    getDetails(searchbar.value);
});


document.querySelector('.form').addEventListener('submit',(e) =>{
    e.preventDefault();
});