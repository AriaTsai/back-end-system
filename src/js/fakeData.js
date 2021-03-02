let faker = require('faker');
let randomName = faker.name.findName();
let randomImage = faker.image.image();

let size = ['S','M','L','XL'];
let productData = []

for (let i=0; i<10; i++) {
  let datetime = function(date) {
    let y = date.getFullYear()
    let m = date.getMonth()
    let d = date.getDate()
    return y+'-'+m+'-'+d
  }
  let addproduct = {
    id: i+1,
    product: faker.commerce.product(),
    original_price: faker.commerce.price(),
    color: faker.commerce.color(),
    size: size[Math.floor(Math.random()*size.length)],
    customer: faker.name.firstName() + ' ' + faker.name.lastName(),
    datetime: datetime(faker.date.past()),
    product_image: faker.image.image()
  }
  productData.push(addproduct)
}

let websiteData = [
  {
    icon: "fab fa-facebook-square",
    name: "google.com",
    count: "26,999",
    grow: "fas fa-arrow-down",
    growColor: 'font-size:24px;color:red',
    percent: "30%"
  },
  {
    icon: "fab fa-facebook-square",
    name: "Wordpress.com",
    count: "15,688",
    grow: "fas fa-arrow-up",
    growColor: 'font-size:24px;color:green',
    percent: "10%"
  },
  {
    icon: "fab fa-facebook-square",
    name: "Shopify.com",
    count: "1,7414",
    grow: "fas fa-arrow-up",
    growColor: 'font-size:24px;color:green',
    percent: "10%"
  },
  {
    icon: "fab fa-facebook-square",
    name: "Facebook.com",
    count: "64,000",
    grow: "fas fa-arrow-down",
    growColor: 'font-size:24px;color:red',
    percent: "20%"
  }
]

export default { randomName, randomImage, productData, websiteData }
