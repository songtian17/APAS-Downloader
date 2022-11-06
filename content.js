console.log("APAS Extension loaded")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function downloadAPAS() {
    try {
        var fileName = document.querySelector(".panel-title").innerText + ".c"
        let contentArr = []

        let scrollBar = document.querySelector("#editor0 > div.ace_scrollbar.ace_scrollbar-v")
        scrollBar.scrollTop = scrollBar.scrollHeight
        await sleep(50)
        let lineNumList = document.getElementsByClassName("ace_gutter-cell")
        let lastLine = parseInt(lineNumList[lineNumList.length - 1].innerText)

        let oneScroll = 588 / (Math.ceil(lastLine / 31) + 1)
        let prevEnd = 0
        for (let i = 0; i < scrollBar.scrollHeight; i += oneScroll) {
            scrollBar.scrollTop = i
            await sleep(50)
            let lineNumList = document.getElementsByClassName("ace_gutter-cell")
            for (let j = 0; j < lineNumList.length; j++) {
                if (prevEnd + 1 == parseInt(lineNumList[j].innerText)) {
                    let lineList = document.getElementsByClassName("ace_line")
                    for (let k = j; k < lineList.length; k++) {
                        let lineContent = lineList[k].innerText.replace(/\u00A0/g, " ")
                        contentArr.push(lineContent)
                    }
                    break
                }
            }
            prevEnd = parseInt(lineNumList[lineNumList.length - 1].innerText)
            if (prevEnd == lastLine) {
                break
            }
        }

        let content = contentArr.join('\n')
        let contentBlob = new Blob([content])
        let blobUrl = URL.createObjectURL(contentBlob)
        let link = document.createElement("a");
        link.href = blobUrl;
        link.download = fileName;
        link.click()

        console.log("Downloaded " + fileName)
    } catch (e) {
        // if (e instanceof SyntaxError) {
        //     console.log("Code has already been downloaded.")
        // } else {
        //     console.log(e)
        // }
        console.log(e)
    }
}

downloadAPAS()