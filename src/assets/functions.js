export function checkInputValidation({ target, limit, message, value}) {
  if (target.value.length > limit) {
    alert(message);
    target.value = value;
  }
}

export function checkBtnValidation({ targetList, limit, message }) {
  let validation = true;
  for (let i = 0; i < targetList.length; i++) {
    if (targetList[i].length <= limit) {
      alert(message);
      validation = false;
      break;
    }
  }
  return validation;
}