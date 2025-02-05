const apiKey = "207bfda7095044c9b3ffc980d10be7a7";  
        const city = "Ansan,KR"; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`;
    
        async function getWeather() {
            try {
                const response = await fetch(url);
                const data = await response.json();
    
                console.log(data);
    
                document.getElementById("location").innerText = data.name;
                document.getElementById("temperature").innerText = `🌡️ ${data.main.temp}°C`;
                document.getElementById("weather").innerText = `🌤️ ${data.weather[0].description}`;
                document.getElementById("wind").innerText = `💨 풍속: ${data.wind.speed} m/s`;
                document.getElementById("humidity").innerText = `💧 습도: ${data.main.humidity}%`;
    
            } catch (error) {
                console.error("날씨 데이터를 불러오는 중 오류 발생:", error);
            }
        }
    
        function updateTime() {
            const now = new Date();
    
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
    
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const day = String(now.getDate()).padStart(2, "0");
            const weekday = ["일", "월", "화", "수", "목", "금", "토"][now.getDay()];
    
            document.getElementById("time").innerText = `${ampm} ${hours}:${minutes.toString().padStart(2, "0")} `;
            document.getElementById("date").innerText = `${year}. ${month}. ${day} (${weekday})`;
        }
          
        getWeather();
        updateTime();
          
        setInterval(updateTime, 60000);
