let diceSides = 6
document.querySelector(".btn").addEventListener("click", onClick)

function onClick() {

    let num1 = Math.ceil( Math.random() * diceSides )
    let num2 = Math.ceil( Math.random() * diceSides )
    document.querySelector(".img1").setAttribute('src', 'images/dice' + num1 + '.png')
    document.querySelector(".img2").setAttribute('src', 'images/dice'+ num2 + '.png')

    let outcome = "Its a Draw!"

    if (num1 > num2) {
        outcome = "Player 1 Wins."
    }

    if (num1 < num2) {
        outcome = "Player 2 Wins."
    }

    document.querySelector(".outcome").innerHTML = outcome
}