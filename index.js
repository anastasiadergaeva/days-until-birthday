const dateFromInput = document.querySelector('#inputdate');
const errorMessage = document.getElementById('errormessage');
const resultButton = document.querySelector('.result-button');
const resultParagraph = document.querySelector('.main__result');
const currentDate = new Date();

function getDaysUntilBirthday() {
    const dateFromInputValue = dateFromInput.value;
    errorMessage.innerHTML = '';
    resultParagraph.innerHTML = '';
    if (dateFromInput.value == '') {
        errorMessage.textContent = 'Введите день и месяц своего рождения';
    } else {
        const parsedDate = Date.parse(currentDate);
        const userBirthday = Date.parse(dateFromInputValue);

        let datesDiff = userBirthday - parsedDate;
        let datesDiffInDays = Math.ceil(datesDiff / 1000 / 3600 / 24);
        if (datesDiffInDays < 0) {
            resultParagraph.innerHTML = 'Ваш день рождения уже прошёл!<br/>Попробуйте в новом году!';
        } else if (datesDiffInDays === 0) {
            resultParagraph.textContent = 'Вы родились сегодня! С днём рождения!';
        } else {
            resultParagraph.textContent = `Ваш день рождения наступит через ${datesDiffInDays} дней!`;
        }
    }
}

resultButton.addEventListener('click', getDaysUntilBirthday);