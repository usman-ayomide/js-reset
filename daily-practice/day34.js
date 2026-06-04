const city = process.argv[2];

async function getWeather(city){
    try{
        const res = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await res.json();

        const condition = data.current_condition[0];

        console.log(`City: ${city}`);
        console.log(`Temperature: ${condition.temp_C}`);
        console.log(`Description: ${condition.weatherDesc[0].value}`);
        console.log(`Weather: ${condition.humidity}%`);

    } catch (err){
        console.log(err);
    }
}

getWeather(city);