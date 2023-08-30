function isValidEmail(email) {
    // Регулярное выражение для проверки email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    // Регулярное выражение для проверки номера телефона с пробелами и скобками
    const phonePattern = /^\+\d{1}\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;

    return phonePattern.test(phoneNumber);
}

function formatPhoneNumber(phoneNumber) {
    // Убираем все символы, кроме цифр
    const cleaned = phoneNumber.replace(/\D/g, "");

    let formatted = "+";

    // Добавляем пробелы в номер телефона по мере ввода
    for (let i = 1; i <= cleaned.length; i++) {
        if (i === 2 || i === 5 || i === 8 || i === 10 ) {
            formatted += " ";
        }
        formatted += cleaned[i - 1];
    }
    return formatted;
}

const deleteDeliveryInfo = () => {
    const deliveriesContainer = document.getElementById('deliveries');
    const deliveriesDesktopContainer = document.getElementById('deliveries_desktop');

    const childrenToRemove = deliveriesContainer.querySelectorAll('.items_to_deliver_section'); 

    for (let child of childrenToRemove) {
        deliveriesContainer.removeChild(child);
    }

    const childrenToRemove2 = deliveriesDesktopContainer.querySelectorAll('.items_to_deliver_container'); 

    for (let child of childrenToRemove2) {
        deliveriesDesktopContainer.removeChild(child);
    }

}

const isValidName = (inputString) => {
    var alphabetPattern = /^[a-zA-Z]+$/;
    return alphabetPattern.test(inputString);
}

const isValidINN = (inputString) => {
    var digitsPattern = /^\d{14}$/;
    return digitsPattern.test(inputString);
}
export {isValidEmail, isValidPhoneNumber, formatPhoneNumber,deleteDeliveryInfo, isValidName, isValidINN}