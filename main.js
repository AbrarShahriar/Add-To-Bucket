import { selector, selectorAll, Card } from "./helper.js"
import { products } from "./data.js"

let bucket = []
let index = 0
let price = 0

const cards = selector(".cards")
const bucketItems = selector(".items")
const bucketCount = selector(".title > span")
const priceContainer = selector("strong")

initialRender(products)

function initialRender(data) {
  for (var i = 0; i < data.length; i++) {
    cards.append(Card({
      name: data[i].name,
      id: data[i].id,
      btnName: "tip dao",
      callback: id => add(id),
      price: data[i].price
    }))
  }
}

function add(id) {
  let a = products.filter(product => product.id === id)
  
  bucket.push({ name: a[0].name, id: a[0].id, index: index, price: a[0].price })
  index++
  price += a[0].price
  updateBucket(bucket)
}

function remove(index) {
  let updatedBucket = bucket.filter(item => item.index !== index)
  bucket = updatedBucket
  price = 0
  bucket.forEach(item => price += item.price)

  updateBucket(bucket)
}

function updateBucket(updatedBucket) {
  bucketItems.innerHTML = null
  
  updatedBucket.forEach(item => bucketItems.append(Card({
    name: item.name,
    id: item.id,
    btnName: "Remove from bucket",
    callback: () => remove(item.index)
  })))
  
  bucketCount.textContent = updatedBucket.length
  priceContainer.textContent = `${price}$`
}
