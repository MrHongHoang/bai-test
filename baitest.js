const array = [1,2,3,4,5,6,7,8,9,10]


const inputValueA = document.querySelector ("#inputa");
const inputValueB = document.querySelector ("#inputb");
const result1 = document.querySelector ("#result1");
const input2 = document.querySelector ("#input2");
const body = document.querySelector ("body");

// Bai 1
const formAB = document.querySelector("#formAB")

function submitAB (e) {
    e.preventDefault()
    let a = inputValueA.value
    let b = inputValueB.value
    result1.innerText = ""

    if (a < 2) {
        a = 2
    }

    if (b < 2) {
        return
    }

    const result = []

    for (let i = a; i <= b; i++) {
        let isPrime = true

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false
            }
        }

        if (isPrime) {
            result.push(i)
        }
    }

    result1.innerText = result
}

formAB.addEventListener('submit', submitAB)

// Bai 2

const form2 = document.querySelector("#form2")
const output2 = document.querySelector("#output2")

function submit2 (e) {
    e.preventDefault()
    let innerHTML = document.createElement("div")
    let stars = ""
    let a = input2.value

    output2.innerHTML = ""

    for (let i = 1; i <= a; i++) {
        let x = document.createElement("div")

        stars += "*"
        x.innerText = stars

        innerHTML.appendChild(x)
    }

    console.log(innerHTML)
    output2.appendChild(innerHTML)
}

form2.addEventListener('submit', submit2)