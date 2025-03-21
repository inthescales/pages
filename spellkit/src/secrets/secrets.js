function eggs() {
    alert('You found my SECRET EGGS')

    // Create fake link to download
    var a = document.createElement("a")
    a.href = "./secrets/secret_eggs.zip"
    a.download = "secret_eggs.zip"
    a.click()
}

export { eggs }