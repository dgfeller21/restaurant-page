export default function homePage() {
    const content = document.querySelector("#content")
    const header = document.createElement('h1')
    header.textContent = "Pizza Po"
    const para = document.createElement('p')
    para.textContent = "We have all kinds of pizza. We have a meatlovers special going on Saturday. 3 large pizzas for the price of 2!"
    const image = document.createElement('div')
    image.classList.add("background-image")
    content.append(image)
    content.append(header)
    content.append(para)
    return content
}