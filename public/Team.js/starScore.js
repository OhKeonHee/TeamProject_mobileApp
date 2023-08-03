function Star() {
  const reviewScore = document.querySelector(".reviewScore")
  const starScoreValue = localStorage.getItem("key_starScore")
  
  console.log(starScoreValue);
  // reviewScore.innerText = "성공"
  
  if(starScoreValue == 1){
    reviewScore.innerText = "1"
  }
  if(starScoreValue == 2){
    reviewScore.innerText = "2"
  }
  if(starScoreValue == 3){
    reviewScore.innerText = "3"
  }
  if(starScoreValue == 4){
    reviewScore.innerText = "4"
  }
  if(starScoreValue == 5){
    reviewScore.innerText = "5"
  }
}

Star();