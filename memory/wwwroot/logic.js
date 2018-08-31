function Card(myid, able, match) {
    this.myid = myid,
    this.able = able
    this.match = match
}

Array.prototype.removeEl = function (el) {
    this.splice(cards.indexOf(el), 1);
};

const I1 = "icona1"
const I2 = "icona2"
const I3 = "icona3"
const I4 = "icona4"

var c1 = new Card("c1", true, I1)
var c2 = new Card("c2", true, I2)
var c3 = new Card("c3", true, I3)
var c4 = new Card("c4", true, I1)
var c5 = new Card("c5", true, I4)
var c6 = new Card("c6", true, I4)
var c7 = new Card("c7", true, I3)
var c8 = new Card("c8", true, I2)

var cards = [c1, c2, c3, c4, c5, c6, c7, c8]
var openCards = []
var round = []

function start() {
    var gameTable = document.getElementById("table")
    gameTable.style.display = "block"
}

function openCard(passedid) {
    var r = document.getElementsByClassName("retro")
    for (let e of r) {
        if (e.id === passedid) {
            e.style.display = "none"
        }
    }

    var o = document.getElementsByClassName("open")
    for (let e of o) {
        if (e.id === passedid) {
            e.style.display = "block"
        }
    }
}

function closeCard(card) {
    var r = document.getElementsByClassName("retro")
    for (let e of r) {
        if (e.id === card.myid) {
            e.style.display = "block"
        }
    }

    var o = document.getElementsByClassName("open")
    for (let e of o) {
        if (e.id === card.myid) {
            e.style.display = "none"
        }
    }
}

function clear(){
    var table = document.getElementById("table")
    table.style.display = "none"

    cards = [c1, c2, c3, c4, c5, c6, c7, c8]
    for(let c of cards){
        closeCard(c.myid)
    }
}

function endGame() {
    if(cards.length == 0){
        alert("HAI VINTO!!!")
        clear()
    }
}

function turn(passedId) {
    openCard(passedId)
    for (let c of cards) {
        if (passedId == c.myid) {
            c.able = false
            round.push(c)
        }
    }

    if (round.length == 2) {
        if (round[0].match === round[1].match) {
            for (let c of round) {
                cards.removeEl(c)
            }
        }
        else {
            for (let c of round) {
                closeCard(c)
                c.able = true
            }
        }

        round.pop()
        round.pop()
        
        endGame()
    }
}