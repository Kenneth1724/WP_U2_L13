let gameOver = false;
let turn = 1;
let currentPic = 0;
let idk = 0;
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
            idk++
            // Chooses a random index
            let rIndex = Math.floor(Math.random() * 10) + 0;
            
            // Chooses a random index again if the index is already used
            if(usedIndex.length!=10) {    
                while(usedIndex.includes(rIndex)) {
                    rIndex = Math.floor(Math.random() * 10) + 0;
                }
            } else {
                usedIndex=[]
            }
           
            // Adds the index used to a list of used indexes
            usedIndex.push(rIndex)
            
            // Changing from black background to image when clicked
            this.style.background=`url(${card[rIndex]}) no-repeat center`
            this.style.backgroundSize="cover";

            // Resetting the cards after two cards are selected
            if(idk==3) {
                for(let i=0;i<pic.length;i++) {
                    pic[i].style.backgroundImage="none";
                    pic[i].style.backgroundColor="black";
                }
                idk=0
            }
        }
        currentPic++
    }
    //pic.style.background = `url(${card[0]})`
    
}

/*function assignImages(pic, rIndex) {
    cards = getRandomElement(card)
}*/