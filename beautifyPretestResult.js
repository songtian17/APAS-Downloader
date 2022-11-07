function beautifyTest() {
    let id = "apas-ext-beautify-pretest"
    let testResult = "<p></p>"
    let numTests = document.querySelector("#pretest-results-id > div > div.panel-body").childElementCount
    for (let i = 1; i <= numTests; i++) {
        let result = document.querySelector(`#pretest-results-id > div > div.panel-body > ul:nth-child(${i}) > li:nth-child(1) > p > strong`).innerText
        if (result == "Passed") {
            testResult += `<p><strong>Test ${i}: ✅</strong></p>`
        } else {
            testResult += `<p><strong>Test ${i}: ❌</strong></p>`
        }
    }

    let e
    if (e = document.getElementById(id)) {
        e.innerHTML = testResult
    } else {
        let newResult = `<ul class="list-group"><li class="list-group-item" id=${id}>${testResult}</li></ul>`
        document.querySelector("#pretest-results-id > div > div.panel-heading").innerHTML += newResult
    }
}

function addPretestObserver() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            let node = mutation.addedNodes[0]
            try {
                if (node && node.nodeName == "DIV") {
                    beautifyTest()
                }
            } catch (e) {
                console.log(e)
            }
        })
    });
    observer.observe(document.querySelector("body"), {childList:true});
}

addPretestObserver()