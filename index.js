const cities = [
  "Москва",
  "Краснодар",
  "Киров",
  "Пермь",
  "Владивосток",
  "Екатеринбург",
  "Кисловодск",
];
const tempa = [];
const taskList = document.getElementById("taskList");
const maxDiv = document.getElementById("max");
const minDiv = document.getElementById("min");

function getTemp() {
  for (let i = 0; i < cities.length; i++) {
    result = window.prompt(`Введите температуру для города: ${cities[i]}`, 0);
    tempa.push(result);
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>Температура в городе ${cities[i]}: ${tempa[i]} °C</span>`;
    taskList.appendChild(listItem);
  }
  const max = Math.max(...tempa);
  const min = Math.min(...tempa);
  maxDiv.textContent = `Максимальная температура: ${max}°C`;
  minDiv.textContent = `Минимальная температура: ${min}°C`;
}
