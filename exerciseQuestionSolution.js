function addSolutionBtn() {
    let title = document.querySelector(".panel-title").innerText
    let link = `http://155.69.100.70:8001/search?query=${title.replaceAll(" ", "+")}`
    let newBtn = `<a href=${link} target="_blank" class="btn btn-sm btn-default" role="button">Solution</a>`
    document.querySelector("body > div > div.container > div > div.panel.panel-default > div.panel-body > ul:nth-child(5) > li:nth-child(2)").insertAdjacentHTML("beforeend", newBtn)
}

addSolutionBtn();