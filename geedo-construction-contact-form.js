
const hiddenDiv = document.querySelector('#form-div');
const closeBtn = document.querySelector('#close-btn');

document.addEventListener('scroll', () => {
    hiddenDiv.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    hiddenDiv.classList.remove('show');
});

function redirectCall() {
    document.querySelector('#submit').addEventListener("click", function(event) {
      event.preventDefault()
    });
    document.querySelector('#submit')
    .addEventListener('click', () => {
    window.location.href =
    'index.html';
    });
  }
