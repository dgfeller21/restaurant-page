export default function homePage() {
    const content = document.createElement('div')
    const header = document.createElement('h1')
    header.textContent = "About the owner"
    const para = document.createElement('p')
    para.textContent = "We began in March 2009"
    content.append(header)
    content.append(para)
    return content
}