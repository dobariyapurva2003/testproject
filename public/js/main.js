const submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const status = document.getElementById('status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');
const getinfo = async (event) => {
    event.preventDefault();
    let cityval = cityname.value;
    if(cityval === ""){
        city_name.innerText = `plz write name befor you search`;
        datahide.classList.add('data_hide');
    }else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b3af2c6f895e3cb35049f8b21c7ec005`
        const resp = await fetch(url);
        const data = await resp.json();
            const arr = [data];
            city_name.innerText = `${arr[0].name},${arr[0].sys.country}`;
            temp_real_val.innerText = arr[0].main.temp;
            const tempmood = arr[0].weather[0].main;

if(tempmood == "Clear"){
    status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
}else if(tempmood == "Clouds"){
    status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
}else if(tempmood == "Rain"){
    status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
}else{
    status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
}
datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText = `plz write city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}



submitbtn.addEventListener('click', getinfo);