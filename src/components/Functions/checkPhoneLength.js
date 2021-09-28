import env from '../../env.json';

// проверка длины номера телефона
const checkPhoneLength = phone => {
    // меняем в начале 8 и пр ерунду на +7
    phone = phone.replace(/^\+\d{1}\s/g, env.phonePrefix);
    // проверка на количество цифр
    const corrNum = phone.replace(/[\s+()-]*/g, '');

    return (corrNum.length === 11) ? true : false;
};
export default checkPhoneLength;