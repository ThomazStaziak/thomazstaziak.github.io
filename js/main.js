const completeName = document.querySelector('#logoName');

const name = 'Thomaz Staziak'

const write = (name, element) => {
  name = name.split('').reverse()
  const typer = setInterval(() => {
    if (!name.length)
      return clearInterval(typer)

    const lastLetter = name.pop()
    element.innerHTML += lastLetter
  }, 200)
}


write(name, completeName)
