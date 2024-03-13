function calculateAge() {
      var dob_day = parseInt(document.getElementById('dob_day').value);
      var dob_month = parseInt(document.getElementById('dob_month').value);
      var dob_year = parseInt(document.getElementById('dob_year').value);

      var today = new Date();
      var birthDate = new Date(dob_year, dob_month - 1, dob_day);

      var ageYears = today.getFullYear() - birthDate.getFullYear();
      var monthDiff = today.getMonth() - birthDate.getMonth();
      var ageMonths = monthDiff < 0 ? (12 + monthDiff) : monthDiff;
      var ageDays = today.getDate() - birthDate.getDate();
      if (ageDays < 0) {
            var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, dob_day);
            ageDays = Math.floor((today.getTime() - lastMonth.getTime()) / (1000 * 60 * 60 * 24));
      }

      var resultContainer = document.getElementById('result');
      resultContainer.innerHTML = "Your age is: " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days.";
}