let totalSpent = 43097088;
let barProgress = 0;
const TOTAL_LIMIT = 21548544;
const SECOND_LIMIT = 43097088;

function startProgress() {
  const bar = document.querySelector(".cssProgress-bar");
  const sidebclr = document.querySelector(".sidewrapper");
  const bardet = document.querySelector(".cssProgress-bar");
  const getcout = document.querySelector(".deteCount");
  const accopen = document.querySelector(".accISopen");
  const modalOpen = document.getElementById("virusescdet");
  const modalOpenproc = document.getElementById("finalProceemodal");

  const duration = 3000;
  const increment = TOTAL_LIMIT / (duration / 10);

  const interval = setInterval(() => {
    if (barProgress >= TOTAL_LIMIT && barProgress < SECOND_LIMIT) {
      clearInterval(interval);
      //modalOpenproc.classList.add("show");
      setTimeout(() => {
        modalOpenproc.classList.add("show");
      }, 500); // Pulsing duration
    } else if (barProgress < totalSpent) {
      barProgress += increment; // Increment progress
      barProgress = Math.min(barProgress, totalSpent);
      bar.style.width = (barProgress / TOTAL_LIMIT) * 100 + "%";
      let petce = (barProgress / TOTAL_LIMIT) * 100;

      let detectcount = 0;

      const petceValue = petce.toFixed(0);

      if (petceValue == 30) {
        detectcount = 1;
        sidebclr.classList.add("activated");
        bardet.classList.add("detectedClr");
        triggAccord();
        modalOpen.classList.add("show");
      } else if (petceValue == 40) {
        detectcount = 2;
        modalOpen.classList.add("show");
      } else if (petceValue == 60) {
        detectcount = 3;
        modalOpen.classList.add("show");
      } else if (petceValue == 80) {
        detectcount = 4;
        modalOpen.classList.add("show");
      } else if (petceValue == 100) {
        detectcount = 5;
        modalOpen.classList.add("show");
        triggAccord();
      }
      if (detectcount !== 0) {
        getcout.textContent = `${detectcount}`;
        accopen.classList.add("is-open");
        setTimeout(() => {
          modalOpen.classList.add("show");
          setTimeout(() => {
            modalOpen.classList.remove("show");
          }, 500);
        }, 500);
      }
      bar.querySelector(
        ".cssProgress-label"
      ).textContent = `${barProgress.toFixed(0)}`;
    } else {
      if (detectcount === 0) {
      }
      clearInterval(interval);
    }
  }, 70);
}
const triggAccord = (petceValue, detectcount) => {
  if (petceValue === 100 || detectcount === 5) {
    modalOpen.classList.remove("show");
    setTimeout(() => {
      modalOpenproc.classList.add("show");
    }, 1000);
  }
};

window.onload = startProgress;
