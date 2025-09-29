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

    let CC =Math.floor(year/100);
    let YY = year % 100;
    let MM = month;
    let DD = day;
    let d = Math.floor((( (CC/4) - (2*CC) -1) + ((5*YY)/4) + ((26*(MM+1))/10) + DD) % 7);
    if (d < 0) d += 7;

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let akanName = gender === "male" ? maleNames[d] : femaleNames[d];


  document.getElementById("result").innerText =
    `You were born on a ${days[d]} and your Akan name is ${akanName}.`;
});

