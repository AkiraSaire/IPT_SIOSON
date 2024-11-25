//time

const fullText = "This is a brief introduction of myself. I'm John Adrian S. Sioson, currently a student at City of Malabon University, taking a Bachelor of Science in Information Technology! I'm compiling my project in this portfolio to show some of my work as a student.";
const textElement = document.getElementById("text");
let index = 0;

function showLetter() {
  if (index < fullText.length) {
    textElement.textContent += fullText[index];
    index++;
  } else {
    clearInterval(interval); // Stop animation when done
  }
}

// Display letters every 100ms
const interval = setInterval(showLetter, 30);

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

document.getElementById("calculatorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (!isNaN(num1) && !isNaN(num2)) {
      document.getElementById("sum").textContent = "Sum: " + (num1 + num2);
      document.getElementById("diff").textContent = "Difference: " + (num1 - num2);
      document.getElementById("product").textContent = "Product: " + (num1 * num2);
      document.getElementById("quotient").textContent = num2 !== 0 ? "Quotient: " + (num1 / num2).toFixed(2) : "Quotient: Error (Division by zero)";
  } else {
      alert("Please enter valid numbers.");
  }
});

// calendar

const calendarGrid = document.getElementById("calendarGrid");
const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar(date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const today = new Date();

    monthYear.textContent = date.toLocaleString("default", { month: "long", year: "numeric" });
    calendarGrid.innerHTML = "";

    // Weekday headers
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekdays.forEach(day => {
        const header = document.createElement("div");
        header.textContent = day;
        header.className = "day header";
        calendarGrid.appendChild(header);
    });

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.className = "day";
        calendarGrid.appendChild(emptyCell);
    }

    // Calendar days
    for (let i = 1; i <= lastDate; i++) {
        const dayCell = document.createElement("div");
        dayCell.textContent = i;
        dayCell.className = "day";
        if (i === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
            dayCell.classList.add("today");
        }
        calendarGrid.appendChild(dayCell);
    }
}

// for navigation
prevMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});


renderCalendar(currentDate);
