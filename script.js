function updateClock() {
  const now = new Date();
  const hrs = now.getHours().toString().padStart(2, '0');
  const mins = now.getMinutes().toString().padStart(2, '0');

  const hoursDiv = document.getElementById('hours');
  const minutesDiv = document.getElementById('minutes');

  if (hoursDiv.innerText !== hrs) {
    hoursDiv.innerText = hrs;
    hoursDiv.classList.remove("flip-card");
    void hoursDiv.offsetWidth;
    hoursDiv.classList.add("flip-card");
  }

  if (minutesDiv.innerText !== mins) {
    minutesDiv.innerText = mins;
    minutesDiv.classList.remove("flip-card");
    void minutesDiv.offsetWidth;
    minutesDiv.classList.add("flip-card");
  }

  const calendarBox = document.getElementById('calendarBox');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  calendarBox.innerText = "📅 " + now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);
updateClock();
