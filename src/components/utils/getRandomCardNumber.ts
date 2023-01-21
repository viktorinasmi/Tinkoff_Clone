//функция генерации рандомного номера карты

export const getRandomCardNumber = () => {
  let cardNumber = '';

  for (let i = 0; i < 4; i++) {
    const random4DigitNumber = Math.round(1000 + Math.random() * 9000);

    //пробел между 4 цифрами карты
    if (i !== 0) {
      cardNumber += ' ';
    }

    cardNumber += random4DigitNumber;
  }

  return cardNumber;
};
