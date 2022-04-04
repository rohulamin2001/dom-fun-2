const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const input = document.querySelector("input")
const customDiv = document.querySelector(".myclass");
let divElement = null;
btn1.addEventListener("click", function() {



    const bgColor = a();
    const body = document.body;
    // You can use this line to set value
    // input.setAttribute("value", bgColor);
    // or
    input.value = bgColor;
    body.style.backgroundColor = bgColor;
    body.style.transition = "all .5s";
    btn2.innerHTML = "Copy"

})
btn2.addEventListener("click", function() {




    input.value = bgColor;
    body.style.backgroundColor = bgColor;
    body.style.transition = "all .5s";
    btn2.innerHTML = "Copy"

})








btn2.addEventListener("click", function() {

    if (divElement !== null) {
        divElement.remove();
        divElement = null;
    }

    navigator.clipboard.writeText(input.value);
    copy(input.value + " Copied");
    btn2.innerHTML = "Done"



})

function a() {

    const red = Math.floor(Math.random() * 255);
    const redHexNo = red.toString(16);
    const blue = Math.floor(Math.random() * 255);
    const blueHexNo = blue.toString(16);
    const green = Math.floor(Math.random() * 255);
    const greenHexNo = green.toString(16);
    return (`#${redHexNo}${blueHexNo}${greenHexNo}`);

}

function copy(msg) {

    divElement = document.createElement("div");
    divElement.className = "myclass animation-in"
    divElement.innerHTML = msg
    document.body.appendChild(divElement)

    divElement.addEventListener("click", function() {
        this.classList.remove("animation-in")
        this.classList.add("animation-out")

        this.addEventListener("animationend", function() {
            this.remove();
            divElement = null;
        })
    })
}