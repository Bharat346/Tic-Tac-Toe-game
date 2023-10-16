

let symbol = 'X'; // Default symbol

function addSymbol(cellId) {
    const cell = document.getElementById(cellId);
    if (cell.textContent === '' && (symbol === 'X' || symbol === 'O')) {
        const p = print(symbol);
        cell.appendChild(p);
        symbol = symbol === 'X' ? 'O' : 'X'; // Toggle the symbol between 'X' and 'O'
        checkWin();
    }
}

function print(symbol) {
    let p = document.createElement("p");
    p.textContent =`${symbol}`;

    return p;
}

// check win 
function checkWin() {
    let box = document.querySelectorAll('.bhk');
    let arr = Array.from(box);

    if ((arr[0].textContent === arr[1].textContent) && (arr[1].textContent === arr[2].textContent) && (arr[2].textContent !== "")) {
        gameover = true;
        console.log(arr[0].textContent + " is win");
        let p = document.createElement("p");
        p.textContent= (arr[0].textContent + " is win");
        bottom.appendChild(p)
        p.classList.add("ben")
        alert(arr[0].textContent + " is win")
        // Optionally, you can display a message or perform further actions here.
    }
    else if ((arr[3].textContent === arr[4].textContent) && (arr[4].textContent === arr[5].textContent) && (arr[4].textContent !== "")) {
        gameover = true;
        console.log(arr[3].textContent + " is win");
        let p = document.createElement("p");
        p.textContent= (arr[3].textContent + " is win");
        bottom.appendChild(p)
        p.classList.add("ben")
        alert(arr[3].textContent + " is win")
        // Optionally, you can display a message or perform further actions here.
    }
    else if ((arr[6].textContent === arr[7].textContent) && (arr[7].textContent === arr[8].textContent) && (arr[8].textContent !== "")) {
        gameover = true;
        console.log(arr[6].textContent + " is win");
        let p = document.createElement("p");
        p.textContent= (arr[6].textContent + " is win");
        bottom.appendChild(p)
        p.classList.add("ben")
        alert(arr[6].textContent + " is win")
        // Optionally, you can display a message or perform further actions here.
    }
    else if ((arr[0].textContent === arr[3].textContent) && (arr[3].textContent === arr[6].textContent) && (arr[6].textContent !== "")) {
        gameover = true;
        console.log(arr[0].textContent + " is win");
        let p = document.createElement("p");
        p.textContent= (arr[0].textContent + " is win");
        bottom.appendChild(p)
        p.classList.add("ben")
        alert(arr[0].textContent + " is win")
        // Optionally, you can display a message or perform further actions here.
    }
    else if ((arr[1].textContent === arr[4].textContent) && (arr[4].textContent === arr[7].textContent) && (arr[7].textContent !== "")) {
        gameover = true;
        console.log(arr[1].textContent + " is win");
        let p = document.createElement("p");
        p.textContent= (arr[0].textContent + " is win");
        bottom.appendChild(p)
        p.classList.add("ben")
        alert(arr[1].textContent + " is win")
        // Optionally, you can display a message or perform further actions here.
    }
    else if ((arr[2].textContent === arr[5].textContent) && (arr[5].textContent === arr[8].textContent) && (arr[2].textContent !== "")) {
        gameover = true;
        console.log(arr[2].textContent + " is win");
        let p = document.createElement("p");
        p.textContent= (arr[2].textContent + " is win");
        bottom.appendChild(p)
        p.classList.add("ben")
        alert(arr[2].textContent + " is win")
        // Optionally, you can display a message or perform further actions here.
    }
    else if ((arr[0].textContent === arr[4].textContent) && (arr[4].textContent === arr[8].textContent) && (arr[8].textContent !== "")) {
        gameover = true;
        console.log(arr[0].textContent + " is win");
        let p = document.createElement("p");
        p.textContent= (arr[0].textContent + " is win");
        bottom.appendChild(p)
        p.classList.add("ben")
        alert(arr[0].textContent + " is win")
        // Optionally, you can display a message or perform further actions here.
    }
    else if ((arr[2].textContent === arr[4].textContent) && (arr[4].textContent === arr[6].textContent) && (arr[6].textContent !== "")) {
        gameover = true;
        console.log(arr[2].textContent + " is win");
        let p = document.createElement("p");
        p.textContent= (arr[2].textContent + " is win");
        bottom.appendChild(p)
        p.classList.add("ben")
        alert(arr[2].textContent + " is win")
        // Optionally, you can display a message or perform further actions here.
    }
    else if((arr[0].textContent !== "")&&(arr[1].textContent !== "")&&(arr[2].textContent !== "")&&(arr[3].textContent !== "")&&(arr[4].textContent !== "")&&(arr[5].textContent !== "")&&(arr[6].textContent !== "")&&(arr[7].textContent !== "")&&(arr[8].textContent !== "")){
        gameover = true;
        console.log("No result");
        let p = document.createElement("p");
        p.textContent= ("No result");
        bottom.appendChild(p)
        p.classList.add("ben")
        alert("No result")
    }
}