// date keys for handling safari date input //
function isIntegerKey(key) {
  return (key >= 48 && key <= 57) || (key >= 96 && key <= 105);
}

function isArrowKey(key) {
  return key >= 37 && key <= 40;
}

function isBackSpaceOrDeleteKey(key) {
  return key === 8 || key === 46;
}

function isEnterKey(key) {
  return key === 13;
}

function validateInputDate(event) {
  const key = event.keyCode;
  if (!(isIntegerKey(key) || isBackSpaceOrDeleteKey(key) || isArrowKey(key)
      || isEnterKey(key))) {
    event.preventDefault();
  }
}

function deleteDashInputDate(event) {
  const key = event.keyCode;
  const date = event.target.value;
  // remove two chars before the cursor's position if deleting dash character
  if (isBackSpaceOrDeleteKey(key)) {
    const cursorPosition = event.target.selectionStart;
    if (date[cursorPosition - 1] === '-') {
      event.target.value = date.slice(0, cursorPosition - 1);
    }
  }
}

function appendDashInputDate(event) {
  const date = event.target.value;
  // append dash to date with format yyyy-mm-dd
  if (date.match(/^\d{4}$/) !== null) {
    event.target.value += '-';
  } else if (date.match(/^\d{4}-\d{2}$/) !== null) {
    event.target.value += '-';
  }
}
