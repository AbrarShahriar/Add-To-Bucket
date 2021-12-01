import { selector, selectorAll, Card } from "./helper.js"
import { products } from "./data.js"

let bucket = []

const cards = selector(".cards")
const bucketItems = selector(".items")
const bucketCount = selector(".title > span")

initialRender(products)

function initialRender(data) {
  for (var i = 0; i < data.length; i++) {
    cards.append(Card({
      name: data[i].name,
      id: data[i].id,
      btnName: "Add to bucket",
      ev: id => add(id)
    }))
  }
}

function add(id) {
  let a = products.filter((el, i) => el.id === id)
  
  bucket.push({ name: a[0].name, id: a[0].id })
  
  updateBucket(bucket)
}

function remove(id) {
  let updatedBucket = bucket.filter(el => el.id !== id)
  bucket = updatedBucket
  updateBucket(bucket)
}

function updateBucket(updatedBucket) {
  bucketItems.innerHTML = null
  updatedBucket.forEach(item => bucketItems.append(Card({
    name: item.name,
    id: item.id,
    btnName: "Remove from bucket",
    ev: id => remove(id)
  })))
  bucketCount.textContent = updatedBucket.length
}