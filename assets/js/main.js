/*==================== CLOCK ====================*/
const hour = document.getElementById("clock-hour"),
  minutes = document.getElementById("clock-minutes"),
  seconds = document.getElementById("clock-seconds");

const clock = () => {
  let date = new Date();

  let hh = date.getHours() * 30,
    mm = date.getMinutes() * 6,
    ss = date.getSeconds() * 6;

  // On ajoute la rotation des éléments
  hour.style.transform = `rotateZ(${hh + mm / 12}deg`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
};
setInterval(clock, 1000);
/*==================== CLOCK & DATE TEXT ====================*/
const textHour = document.getElementById("text-hour");
const textMinutes = document.getElementById("text-minutes");
const textAmPm = document.getElementById("text-ampm");
const dateWeek = document.getElementById("date-day-week");
const dateDay = document.getElementById("date-day");
const dateMonth = document.getElementById("date-month");
const dateYear = document.getElementById("date-year");

const clockText = () => {
  let date = new Date();

  let hh = date.getHours(),
    ampm,
    mm = date.getMinutes(),
    day = date.getDate(),
    dayweek = date.getDay(),
    month = date.getMonth(),
    year = date.getFullYear();

  // On change les heures de 24 à 12 et on établit si c'est AM ou PM
  if (hh >= 12) {
    hh = hh - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  // On détecte quand c'est 0 AM et on transforme sur 12 AM
  if (hh === 0) {
    hh = 12;
  }
  // Mettre un zéro avant les heures de 1 à 9
  if (hh < 10) {
    hh = `0${hh}`;
  }
  // Montrer les heures
  textHour.innerHTML = `${hh}:`;
  // Mettre un zéro avant les minutes inférieur à 10
  if (mm < 10) {
    mm = `0${mm}`;
  }
  // Montrer les minutes
  textMinutes.innerHTML = mm;
  // Montrer am ou pm
  textAmPm.innerHTML = ampm;
  // Si on montre le nom du jour de la semaine
  let week = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  // On montre les mois de l'année
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // ON montre le jour, le mois et l'année
  dateDay.innerHTML = day;
  dateWeek.innerHTML = `${week[dayweek]}`;
  dateMonth.innerHTML = `${months[month]}`;
  dateYear.innerHTML = year;
};
setInterval(clockText, 1000);

/*==================== DARK/LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";

// Selection du thème si l'utilisateur sélectionne le mode
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Validation du thème si l'utilisateur le choisit
if (selectedTheme) {
  // Opération ternaire, on demande quel thème ?
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](
    iconTheme
  );
}
// Activation / Désactivation du thème avec le boutton
themeButton.addEventListener("click", () => {
  // Ajoute et enlève l'icone
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // On sém*lectionne le thème et l'icone actuel que l'utilisateur choisi
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
