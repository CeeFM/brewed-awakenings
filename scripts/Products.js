import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener('click', e => {
    const itemClicked = e.target;
    if (itemClicked.id.startsWith("product")) {
        const [,productPrimaryKey] = itemClicked.id.split("--");
        for (const product of products) {
            if (product.id === parseInt(productPrimaryKey)) {
                        window.alert(`${product.name} costs $${product.price.toFixed(2)}. Don't even think about stealing it though. We're watching you. I would insert emoji eyes here if I could. I'm not a friggin wizard tho.`)
                    }
                }
            }
        })