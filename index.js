const dateFromInput = document.querySelector('#inputdate').value;
const errorMessage = document.getElementById('errormessage');
const resultButton = document.querySelector('.result-button');
const resultParagraph = document.querySelector('.main__result');

function checkEmptyInput() {
    errorMessage.innerHTML = '';
    if (dateFromInput.value == '') {
        errorMessage.textContent = 'Введите свою дату рождения';
    }
}

function getDaysUntilBirthday() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const userBirthday = new Date(dateFromInput);
    const userBirthdateYear = userBirthday.getFullYear();
    const userBirthdateMonth = userBirthday.getMonth();
    const userBirthdateDay = userBirthday.getDay();
    const birthDate = new Date(userBirthdateYear, userBirthdateMonth, userBirthdateDay);
    if (birthDate.getFullYear() >= currentDate.getFullYear()) {
        let dateUntilBirthday;
        dateUntilBirthday = Math.ceil((birthDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    } else {
        birthDate.setFullYear(currentYear + 1);
        dateUntilBirthday = Math.ceil((birthDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    }
    console.log(dateUntilBirthday);
    console.log(birthDate);
}

function calculateDaysUntilBirthday() {
    let declensionOfADayWord = "";
    if (dateUntilBirthday === 1) {
        declensionOfADayWord = "день";
    } else if (dateUntilBirthday < 5) {
        declensionOfADayWord = "дня";
    } else {
        declensionOfADayWord = "дней";
    }

    resultParagraph.innerHTML = `До Вашего дня рождения осталось ${dateUntilBirthday} ${declensionOfADayWord}`;
}

console.log(getDaysUntilBirthday());

resultButton.addEventListener('click', getDaysUntilBirthday);