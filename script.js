const form = document.querySelector(".todo__form")
const formInput = document.querySelector('.todo__input');
const addTaskBtn = document.querySelector(".todo__button");
const card = document.querySelector(".card");
const deleteCardBtn = document.querySelector('.card__button_type_delete');
const editCardButton = document.querySelector('.card__button_type_edit');
const taskContainer = document.querySelector('.container');
const cardTemplate = document.querySelector(".card__template").content;


function getCard(data) {
   const card = cardTemplate.querySelector('.card').cloneNode(true);
   card.querySelector(".card__title").textContent = data.text;
   card.querySelector('.card__button_type_delete').addEventListener('click', () => {
      card.remove();
   })
   card.querySelector('.card__button_type_edit').addEventListener('click', () => {
      if (document.querySelector('.card__button_type_active')) {
         card.querySelector('.card__button_type_edit').classList.remove('card__button_type_active');
         formInput.removeEventListener('input', inputHandler);
         form.reset();
      } else {
         card.querySelector('.card__button_type_edit').classList.add('card__button_type_active');
         formInput.addEventListener('input', inputHandler);
      }
   })
   return card;
}

function renederCard(card) {
   taskContainer.append(card);
}

function getData() {
   const data = {};
   data[formInput.name] = formInput.value;
   return data;
}


form.addEventListener('submit', (evt) => {
   evt.preventDefault();
   renederCard(getCard(getData()));
   form.reset();
})

function inputHandler(evt) {
   document.querySelector('.card__button_type_active').parentElement.previousElementSibling.textContent = formInput.value;

}