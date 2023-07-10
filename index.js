const numbers = document.querySelectorAll(".number")
const result = document.querySelector(".result")
const signs = document.querySelectorAll(".sign")
const negative = document.querySelector(".negative")
const percent = document.querySelector(".percent")
const clear = document.querySelector(".clear")
const equals = document.querySelector(".equal")


let firstValue = ""
let isFirstValue = true
let secondValue = ""
let isSecondValue = false
let sign = ""
let resultValue = 0

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (e) => {
        let atr = e.target.getAttribute("value")
        if (isFirstValue === true) {
            getFirstValue(atr)
            console.log(atr)
        }

        if (isSecondValue === true) {
            getSecondValue(atr)
            console.log(atr)
        }
    })
}

function getFirstValue(el) {
    firstValue += el
    result.innerHTML = firstValue
    // firstValue = +firstValue

    smallText(firstValue)
}

function getSecondValue(el) {
    if (firstValue !== "" && sign !== "") {
        secondValue += el
        result.innerHTML = secondValue
        // secondValue = +secondValue
    }

    smallText(secondValue)
}



function getSign() {
    for (i = 0; i < signs.length; i++) {
        signs[i].addEventListener("click", (e) => {
            if (firstValue.length > 0 && secondValue.length > 0 && sign.length > 0) {

                firstValue = computeAns()
            }
            if (firstValue !== "") {
                sign = e.target.getAttribute("value")
                isFirstValue = false
                isSecondValue = true
            }


        })
    }
}

getSign()

equals.addEventListener("click", computeAns)

// function checkLength() {
//     resultValue = JSON.stringify(resultValue)

//     if (resultValue >= 8) {
//         resultValue = JSON.parse(resultValue)
//         result.innerHTML = resultValue.toFixed(5)
//     }
// }

function computeAns() {

    // result.innerHTML = ""
    // if(resultValue.length > 0){
    //     // firstValue = resultValue
    // }


    firstValue = Number(firstValue)
    secondValue = Number(secondValue)

    if (sign === "+") {
        resultValue = firstValue + secondValue
    } else if (sign === "-") {
        resultValue = firstValue - secondValue
    } else if (sign === "/") {
        resultValue = firstValue / secondValue
    } else if (sign === "*") {
        resultValue = firstValue * secondValue
    }


    resultValue = String(resultValue)
    result.innerHTML = resultValue
    firstValue = ""
    secondValue = ""
    sign = ""
    isFirstValue = true
    isSecondValue = false

    return resultValue
    // checkLength()
}


function smallText(ans = "") {
    if (ans.length > 6) {
        result.classList.add("small")
        //    console.log(ans.length);
    } else {
        result.classList.remove("small")
        // console.log(ans.length);
    }
}




percent.addEventListener("click", () => {
    result.innerHTML = ""
    if (firstValue != "") {
        resultValue = firstValue / 100
        firstValue = firstValue
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        result.innerHTML = resultValue
    }

    result.innerHTML = resultValue
})

negative.addEventListener("click", () => {
    result.innerHTML = ""
    if (firstValue != "") {
        resultValue = -firstValue
        firstValue = -firstValue
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        result.innerHTML = -resultValue
    }
    result.innerHTML = resultValue
})

clear.addEventListener("click", () => {
    result.innerHTML = "";

    firstValue = "";
    isFirstValue = true;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;

    result.innerHTML = resultValue;

})



