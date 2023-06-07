document.querySelector('#loginButton').addEventListener('click', () => {
    window.location.href = 'login.html';
  });
  document.querySelector('#signUpButton').addEventListener('click', () => {
    window.location.href = 'sign-up.html';
  });

  function validatePassword() {
    var passwordInput = document.getElementById('password');
    var password = passwordInput.value;
    var passwordMessage = document.getElementById('passwordMessage');

    if (password.length >= 5) {
      // Password is valid
      passwordMessage.textContent = ""; // Clear any previous error messages
      
    } else {
      // Password is invalid
      passwordMessage.textContent = "Password should contain at least 5 characters";
    }
}
var phoneNumberInput = document.getElementById('phone');
var phoneMessage = document.getElementById('phoneMessage');

phoneNumberInput.addEventListener('input', function() {
  var phoneNumber = phoneNumberInput.value;

  if (phoneNumber.length > 10) {
    phoneMessage.textContent = "Phone number should not exceed 10 characters";
  } else {
    phoneMessage.textContent = "";
  }
});  var signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve form field values
  var name = document.getElementById('name').value;
  var lastName = document.getElementById('last-name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  var address = document.getElementById('address').value;
  var creditCard = document.getElementById('creditcard').value;
  var phoneNumber = document.getElementById('phone').value;

  // Create an object with the form data
  var formData = {
    name: name,
    lastName: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    address: address,
    creditCard: creditCard,
    phoneNumber: phoneNumber
  };

  // Send the form data to the server
  fetch('127.0.0.1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (response.ok) {
        // Handle successful form submission
        console.log('Form submitted successfully');
      } else {
        // Handle form submission error
        console.log('Form submission failed');
      }
    })
    .catch(error => {
      // Handle any errors
      console.log('Error:', error);
    });
});

function goToHomePage() {
  // Add logic to redirect to the home page
}
function goToHomePage() {
    window.location.href = "index.html";
  }


  
  function refreshTable() {
    // Get the table element
    var table = document.getElementById("flightTable");

    // Generate new random arrival and departure times
    var arrivalTimes = generateRandomTimes(3);
    var departureTimes = generateRandomTimes(3);
    var arrivalDates = generateRandomDates(3);

    // Update the table content with the new data
    for (var i = 1; i <= 3; i++) {
      var row = table.rows[i];
      row.cells[2].textContent = arrivalTimes[i - 1];
      row.cells[5].textContent = departureTimes[i - 1];
      row.cells[6].textContent = arrivalDates[i - 1];
    }
  }

  function refreshTable() {
    // Get the table element
    var table = document.getElementById("flightTable");

    // Generate new random departure and arrival times
    var departureTimes = generateRandomTimes(3);
    var arrivalTimes = generateRandomTimes(3);
    var arrivalDates = generateRandomDates(3);

    // Update the table content with the new data
    for (var i = 1; i <= 3; i++) {
      var row = table.rows[i];
      row.cells[2].textContent = departureTimes[i - 1];
      row.cells[3].textContent = arrivalTimes[i - 1];
      row.cells[7].textContent = arrivalDates[i - 1];
    }
  }

  function generateRandomTimes(count) {
    var times = [];
    for (var i = 0; i < count; i++) {
      var hours = Math.floor(Math.random() * 24);
      var minutes = Math.floor(Math.random() * 60);
      var time = formatTime(hours, minutes);
      times.push(time);
    }
    return times;
  }

  function formatTime(hours, minutes) {
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  }

  function generateRandomDates(count) {
    var dates = [];
    var today = new Date();
    for (var i = 0; i < count; i++) {
      var departureDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      var arrivalDate = new Date(departureDate.getTime() + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000);
      var formattedDate = formatDate(arrivalDate);
      dates.push(formattedDate);
    }
    return dates;
  }

  function formatDate(date) {
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  }
  fetch('/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username, password: password })
  })
  .then(response => {
    if (response.ok) {
      // Authentication successful
      alert('Authentication successful!');
      // Do something else, such as redirecting to another page
    } else {
      // Authentication failed
      alert('Authentication failed!');
      // Do something else, such as displaying an error message
    }
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
