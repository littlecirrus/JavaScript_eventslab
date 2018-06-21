document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
const container = document.querySelector('.container');


const handleFormInput = function(event){
  event.preventDefault();
  const buttonResult = document.querySelector(`#button-result`);
   const resultString = `You typed: ${this.author.value} ${this.title.value} ${this.category.value}`;
   createParagraph(resultString, buttonResult);

  form.reset();
};

form.addEventListener('submit',handleFormInput);

const createParagraph = function(content, container){
  const paragraph = document.createElement('p');
  paragraph.textContent = content;
  container.appendChild(paragraph);
};

});
