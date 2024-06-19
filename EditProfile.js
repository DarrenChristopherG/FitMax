let currentField = '';

function showPopup(field) {
  currentField = field;
  document.getElementById('popup').style.display = 'block';
  document.getElementById('popup-title').innerText = `Change ${field.charAt(0).toUpperCase() + field.slice(1)}`;
  document.getElementById('popup-input').value = document.getElementById(field).innerText;
}

function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}

function changeInfo() {
  const newValue = document.getElementById('popup-input').value;
  if (currentField === 'username') {
    document.getElementById('username').innerText = newValue;
    document.getElementById('username-display').innerText = newValue;
  } else {
    document.getElementById(currentField).innerText = newValue;
  }
  hidePopup();
}
