const timer = (deadline) => {
    const timerDays = document.querySelector('.count_1 > span');
    const timerHours = document.querySelector('.count_2 > span');
    const timerMinutes = document.querySelector('.count_3 > span');
    const timerSeconds = document.querySelector('.count_4 > span');
    const getTimeRemaining = () => {
        const deadlineTime = new Date(deadline).getTime();
        const today = new Date().getTime();
        let timeRemaining = (deadlineTime - today) / 1000; // время до дедлайна в секундах
        let days = Math.floor( timeRemaining/60/60/24 );
        let hours = Math.floor( timeRemaining/60/60%24 );
        let minutes = Math.floor( timeRemaining/60%60 );
        let seconds = Math.floor( timeRemaining%60 );
        return {timeRemaining, days, hours, minutes, seconds};
    };
    const updateClock = () => {
        let getTime = getTimeRemaining();
        if (getTime.timeRemaining > 0) {
            if (String(getTime.days).length === 1) {
                timerDays.textContent = "0" + getTime.days;
            } else {timerDays.textContent = getTime.days;}

            if (String(getTime.hours).length === 1) {
                timerHours.textContent = "0" + getTime.hours;
            } else {timerHours.textContent = getTime.hours;}

            if (String(getTime.minutes).length === 1) {
                timerMinutes.textContent = "0" + getTime.minutes;
            } else {timerMinutes.textContent = getTime.minutes;}

            if (String(getTime.seconds).length === 1) {
                timerSeconds.textContent = "0" + getTime.seconds;
            } else {timerSeconds.textContent = getTime.seconds;}
        } else {
            clearInterval(idInterval);
            timerDays.textContent = "00";
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }
    };
    updateClock();
    let idInterval = setInterval(updateClock, 1000);
};
export default timer;