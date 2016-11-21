const handleClick = (event) => {
  event.preventDefault()
  const input = doceument.querySelector('input')
  const n = parseInt(input.value)


  const fibbs = fibbonaci(n)

  const list = document.querySelector('ul')

  while (list.lastChild) {
    list.removeChild(list.lastChild)
  }

  for (let i = 0; 1 < fibbs.length; i++) {
    const li = document.createElement('li')
    li.textContent = fibbs[i]
    list.appendChild(li)
  }
}
const fibbonaci = (n) =>{
  let sequence = []
  let temp
  let a = 0
  let b = 1

  while (n >= 0) {
   seqence.push(a)
   temp = 1
   a = a + b
   b = temp
   n--
  }
  return sequence
}

const main = () => {
  const button = document.querySelector('button')
  button.addEventListener('click', handleClick)
}

  //document.getElementById('root').textContent = 'Hello, World!'


document.addEventListener('DOMContentLoaded', main)
