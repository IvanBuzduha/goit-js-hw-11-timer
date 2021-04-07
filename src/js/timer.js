class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = document.querySelector(`${selector}`);
    this.targetDate = targetDate;
  }
  createTimer() {
    const nowDate = new Date(this.targetDate).getTime();

    function pad(value) {
      return String(value).padStart(2, '0'); // - Добавляет  один ноль
    }    
    let interval = setInterval(() => {
      const date = Date.now();
      let timeDifference = nowDate - date;
      if (timeDifference < 0) {
        timeDifference = 0;
        clearInterval(interval);        
        alert(`Time is over `);        
      }
      this.selector.querySelector('[ data-value="secs"]').textContent = pad(Math.floor((timeDifference % (1000 * 60)) / 1000));
      this.selector.querySelector('[ data-value="mins"]').textContent = pad(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
      this.selector.querySelector('[ data-value="hours"]').textContent = pad(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.selector.querySelector('[ data-value="days"]').textContent = pad(Math.floor((timeDifference / (1000 * 60 * 60 * 24))));
        //   console.log(this.selector.querySelector('[ data-value="secs"]').textContent);
    }, 1000)
  }
}
const timer = new CountdownTimer('#timer-1', '04, 20, 2021');
timer.createTimer();
// const timer2 = new CountdownTimer('#timer-2', '04, 9, 2022');
// timer2.createTimer();