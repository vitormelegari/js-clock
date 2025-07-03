const hourHand = document.querySelector(".hour.hand");
const minuteHand = document.querySelector(".minute.hand");
const secondHand = document.querySelector(".second.hand");

const fillDotsOnScreen = () => {
  const dotsContainer = document.getElementById("dots-container");

  for (let i = 0; i <= 60; i++) {
    const dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    dotsContainer.appendChild(dot);
    dot.style.cssText = `
    
  left: ${Math.round(50 + 50 * Math.sin(i * 6 * (Math.PI / 180)))}%;

  bottom: ${Math.round(50 + 50 * Math.cos(i * 6 * (Math.PI / 180))) - 2}%;
  
  transform: translateX(-50%) rotate(${i * 6}deg);
`;
    if (i % 5 === 0) {
      dot.style.width = ".25rem";
      dot.style.height = "1rem";
    }
    dot.setAttribute("data-value", `${i}`);
  }
};

addEventListener("load", fillDotsOnScreen);

const clock = {
  hoursDigital: document.getElementById("hours"),
  minutesDigital: document.getElementById("minutes"),
  secondsDigital: document.getElementById("seconds"),

  update: () => {
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    if (hours !== clock.hoursDigital.textContent) {
      hourHand.style.transform = `translateX(-50%) rotate(${hours * 6}deg)`;
      clock.hoursDigital.textContent = hours <= 9 ? "0" + hours : hours;
    }

    if (minutes !== clock.minutesDigital.textContent) {
      minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
      clock.minutesDigital.textContent = minutes <= 9 ? "0" + minutes : minutes;
    }

    secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
    clock.secondsDigital.textContent = seconds <= 9 ? "0" + seconds : seconds;

    setTimeout(() => clock.update(), 500);
  },
};

clock.update();
