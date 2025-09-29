document.getElementById("akanForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  if (day < 1 || day > 31) {
    alert("Invalid day! Please enter a day between 1 and 31.");
    return;
  }
  if (month < 1 || month > 12) {
    alert("Invalid month! Please enter a month between 1 and 12.");
    return;
  }
  if (!year || year < 1000) {
    alert("Please enter a valid year (e.g., 1995).");
    return;
  }
  if (!gender) {
    alert("Please select a gender.");
    return;
  }

  const birthDate = new Date(year, month - 1, day); 
  const dayOfWeek = birthDate.getDay(); 

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  let akanName = "";
  if (gender === "male") {
    akanName = maleNames[dayOfWeek];
  } else {
    akanName = femaleNames[dayOfWeek];
  }

  document.getElementById("result").innerText =
    `You were born on a ${days[dayOfWeek]} and your Akan name is ${akanName}.`;
});

