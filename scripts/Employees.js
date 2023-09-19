import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees();
const orders = getOrders();

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

export const saleCounter = () => {
    for (const employee of employees) {
        let productsSold = 0;
        for (const order of orders) {
            if (employee.id === order.employeeId) {
                productsSold++
            }
            employee.productsSold = productsSold
        }
    }
}

document.addEventListener('click', e => {
    const itemClicked = e.target;
    if (itemClicked.id.startsWith("employee")) {
        const [,employeePrimaryKey] = itemClicked.id.split("--");
        saleCounter();
        for (const employee of employees) {
            if (employee.id === parseInt(employeePrimaryKey)) {
                window.alert(`${employee.name} sold ${employee.productsSold} products!`)
            }
        }
    }
})