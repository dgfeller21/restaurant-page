
class Pizza {
    constructor(imgClass, item, price) {
        this.imgClass = imgClass
        this.item = item
        this.price = price
    }
}
const pizza1 = new Pizza('menu1-img', 'Pepperoni Pizza', '$10.99')
const pizza2 = new Pizza('menu2-img', 'Supreme Pizza', '$10.99')
const pizza3 = new Pizza('menu3-img', 'Pineapple Pizza', '$10.99')

export default function menuPage() {
    const container = document.createElement('div')
    container.classList.add("card-container")
    const card1 = makeCards(pizza1)
    const card2 = makeCards(pizza2)
    const card3 = makeCards(pizza3)

    const image = document.createElement('div')
    image.classList.add("background-image")
    image.classList.add("menu-background-image")

    container.append(image)
    container.append(card1)
    container.append(card2)
    container.append(card3)
    return container
}
function makeCards(pizza) {
    const card = document.createElement('div')
    card.classList.add("card")
    const image1 = document.createElement('div')
    image1.classList.add(pizza.imgClass)
    card.append(image1)
    const text1Container = document.createElement('div')
    text1Container.classList.add('img-text')
    const text1a = document.createElement('h3')
    text1a.textContent = pizza.item
    text1Container.append(text1a)
    const text1b = document.createElement('h3')
    text1b.textContent = pizza.price
    text1Container.append(text1b)
    card.append(text1Container)

    return card
}