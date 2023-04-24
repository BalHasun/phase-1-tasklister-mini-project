document.addEventListener("DOMContentLoaded", () => {

  const sumBtn = document.forms[0].elements[1];

  sumBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let textinfo = document.forms[0].elements[0].value;
    const todo = document.querySelector('#tasks')
    const list = document.createElement('li')
    list.textContent = textinfo
    todo.appendChild(list)
  })
  console.log(sumBtn)
});

