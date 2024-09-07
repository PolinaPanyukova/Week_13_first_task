//Повтор из редми для удобства пользователя
// Получение элементов DOM
// Функция для расчета дней до дня рождения:
         // Проверка на пустое поле
         // Проверяем, совпадает ли текущая дата с днём рождения
         // Преобразуем дату рождения в текущем году
         // Если день рождения уже прошёл в этом году, прибавляем год
         // Рассчитываем разницу между текущей датой и днём рождения
         // Преобразуем разницу в количество дней
         // Добавление слушателя события для скрытия сообщения об ошибке при вводе

// Получение элементов DOM

const messageDate = document.querySelector('#messageDate');
const resultInput = document.querySelector('#result');
const errorInput = document.querySelector('#error');
const congratulations = document.querySelector('#congratulations');

// Функция для расчета дней до дня рождения
function calculateDaysPassed() {
    const messageDateStr = messageDate.value;

    if (!messageDateStr) {               // Проверка на пустое поле
        errorInput.style.display = 'block';
        resultInput.textContent = '';
        congratulations.style.display = 'none';
        return;
    } else {
        errorInput.style.display = 'none';
    }

    const messageDateObj = new Date(messageDateStr);
    const today = new Date();

    // Проверяем, совпадает ли текущая дата с днём рождения
    if (messageDateObj.getDate() === today.getDate() && messageDateObj.getMonth() === today.getMonth()) {
        congratulations.style.display = 'block'; // Показываем картинку и поздравление
        resultInput.textContent = ''; 
    } else {
        congratulations.style.display = 'none'; // Скрываем поздравление, если не сегодня
        
        // Преобразуем дату рождения в текущем году
        let birthdayThisYear = new Date(today.getFullYear(), messageDateObj.getMonth(), messageDateObj.getDate());

        // Если день рождения уже прошёл в этом году, прибавляем год
        if (today > birthdayThisYear) {
            birthdayThisYear = new Date(today.getFullYear() + 1, messageDateObj.getMonth(), messageDateObj.getDate());
        }

        // Рассчитываем разницу между текущей датой и днём рождения
        const timeDifference = birthdayThisYear - today;

        // Преобразуем разницу в количество дней
        const daysPassed = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); 
        resultInput.textContent = `Осталось дней до праздника: ${daysPassed}`;
    }
}

messageDate.addEventListener('input', () => {
    if (messageDate.value) {
        errorInput.style.display = 'none';
    }
});
