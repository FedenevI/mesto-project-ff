const delFunc = (itemCard) => {
    itemCard.remove()
}

const Cards = (card, delFunc) => {
    const cardTemplate = document.querySelector('#card-template').content
    const cardList = document.querySelector('.places__list');
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const buttonDeleteCard = cardElement.querySelector('.card__delete-button');
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;
    cardList.append(cardElement);
    buttonDeleteCard.addEventListener('click', () => delFunc(cardElement))
}

initialCards.forEach((card) => Cards(card, delFunc))
