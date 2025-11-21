let gameOver = false;
let turn = 1;
let currentPic = 0;
const card = ["resources/bear.png", "resources/football.png", "resources/leafs.png",
     "resources/mouse.png", "resources/pie.png", "resources/pumpkin.png",
      "resources/scarecrow.png", "resources/soccer.png", "resources/turkey.png",
    "resources/wind.png",
]
let usedIndex = [];
const pic = document.getElementsByClassName("inside_div")



function user_clicks(){
    while(currentPic!=20) {
        pic[currentPic].onclick = function() {
            let rIndex = Math.floor(Math.random() * 9) + 1;
            if(usedIndex.length!=9) {    
                if(usedIndex.includes(rIndex)) {
                    rIndex = Math.floor(Math.random() * 9) + 1;
                } else {
                    usedIndex.push(rIndex)
                }
            } else {
                usedIndex=[]
            }
            //console.log(rIndex)
            console.log(usedIndex)
            console.log(usedIndex.length)
            this.style.background=`url(${card[rIndex]}) no-repeat center`
            this.style.backgroundSize="cover";
        }
        currentPic++
    }
    //pic.style.background = `url(${card[0]})`
    
}

function assignImages(pic, rIndex) {
    cards = getRandomElement(card)
}