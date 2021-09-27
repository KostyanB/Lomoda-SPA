// проверка длины номера телефона
const checkPhoneLength = phone => {
    // меняем 8 на +7
    phone = phone.replace(/^\+\d{1}\s/g, '+7 ');
    // проверка на количество цифр
    const corrNum = phone.replace(/[\s\+\(\)-]*/g, '');
    return (corrNum.length === 11) ? true : false;
};
export default checkPhoneLength;