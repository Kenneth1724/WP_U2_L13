let gameOver = false;
let turn = 1;
const card = ["resources/bear.png", "resources/football.png", "resources/bear.png",
     "resources/bear.png", "resources/bear.png", "resources/bear.png",
      "resources/bear.png", "resources/bear.png", "resources/bear.png",
    "resources/bear.png",
]



function user_clicks(){
    const pic = document.getElementsByClassName("inside_div")
    const picClicked = pic[0].id.replace("row","")
    console.log(picClicked)
    pic[0].style.background = `url(${card[0]})`
}