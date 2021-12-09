export const selector = s => document.querySelector(s)
export const selectorAll = s => document.querySelectorAll(s)
export const create = el => document.createElement(el)

export const Card = ({ name, id, callback, btnName, index, price }) => {
  const div = create("div")
  div.className = "card"
  
  const h3 = create('h3')
  const p = create("p")
  const strong = create("strong")
  strong.textContent = price 
  h3.textContent = name
  p.textContent = id
  
  const button = create("button")
  button.innerText = btnName
  
  button.addEventListener("click", () => callback(id))
  
  div.append(h3)
  div.append(p)
  div.append(strong)
  div.append(button)
  
  return div
}

window.onerror = (ev, src, line, col) => {
  console.log(ev, src, line, col);
}