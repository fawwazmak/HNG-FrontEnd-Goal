setInterval(() => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
    const time = new Date();
    const dayNum = time.getUTCDate();
    const currentDay = daysOfWeek[dayNum];

    const currentHour = time.getUTCHours();
    const currentMinute = time.getUTCMinutes();
    const currentSecond = time.getUTCSeconds();
    const currentTime = `${currentHour} : ${currentMinute} : ${currentSecond}`;

    // alert(currentHour);
    crrntTime = document.getElementById("currentTime");
    crrntTime.innerText = currentTime;

    crrntDay = document.getElementById("crrntDay");

    crrntDay.innerText = currentDay;
}, 1000)


