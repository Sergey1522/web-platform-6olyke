console.log('hello!');
const btn = document.querySelector('.toggle-text-button');
const div = document.querySelector('#text');

function toggleText() {
  switch (div.hasAttribute('hidden')) {
    case false:
      div.hidden = true;
      break;
    case true:
      div.hidden = false;
      break;
  }
}

btn.addEventListener('click', toggleText);
