function addSolutionsToQuestionList() {
    let newHeader = `<th>NTUQA Solutions</th>`
    document.querySelector("body > div > div.container > div > table > thead > tr").innerHTML += newHeader
    
    let tbody = document.querySelector("body > div > div.container > div > table > tbody")
    for (let row of tbody.children) {
        console.log(row.children[0].innerText)
        let question = row.children[0].innerText
        let link = `http://155.69.100.70:8001/search?query=${question.replaceAll(" ", "+")}`
        row.innerHTML += `<td><a href=${link}>Solution</a></td>`
    }
}

addSolutionsToQuestionList()