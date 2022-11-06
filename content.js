console.log("APAS Extension loaded")

try {
    var fileName = document.querySelector(".panel-title").innerText + ".c"
    let aceLines = document.getElementsByClassName("ace_line");
    let contentArr = []

    for (line of aceLines) {
        contentArr.push(line.textContent.replace(/\u00A0/g, " "))
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

