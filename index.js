let gameOver = false;
let turn = 1;
let currentPic = 0;
const card = ["resources/bear.png", "resources/football.png", "resources/bear.png",
     "resources/bear.png", "resources/bear.png", "resources/bear.png",
      "resources/bear.png", "resources/bear.png", "resources/bear.png",
    "resources/bear.png",
]
const pic = document.getElementsByClassName("inside_div")



function user_clicks(){
    
    while(currentPic!=currentPic.length) {
        console.log(pic[0])
        pic[currentPic].onclick = function() {
            alert("test")
        }
        currentPic++
    }
    //pic.style.background = `url(${card[0]})`
    
}