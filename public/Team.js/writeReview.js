//별점 주기

const star1 = document.querySelector(".star1")
const star2 = document.querySelector(".star2")
const star3 = document.querySelector(".star3")
const star4 = document.querySelector(".star4")
const star5 = document.querySelector(".star5")

star1.addEventListener("click",() => {
  star1.classList.add("starOn")
  star2.classList.remove("starOn")
  star3.classList.remove("starOn")
  star4.classList.remove("starOn")
  star5.classList.remove("starOn")
  localStorage.setItem(`key_starScore`, 1)
  star1.addEventListener("click", () => {
    star1.classList.toggle("starOn")
  })
})
star2.addEventListener("click",() => {
  star1.classList.add("starOn")
  star2.classList.add("starOn")
  star3.classList.remove("starOn")
  star4.classList.remove("starOn")
  star5.classList.remove("starOn")
  localStorage.setItem(`key_starScore`, 2)
})
star3.addEventListener("click",() => {
  star1.classList.add("starOn")
  star2.classList.add("starOn")
  star3.classList.add("starOn")
  star4.classList.remove("starOn")
  star5.classList.remove("starOn")
  localStorage.setItem(`key_starScore`, 3)
})
star4.addEventListener("click",() => {
  star1.classList.add("starOn")
  star2.classList.add("starOn")
  star3.classList.add("starOn")
  star4.classList.add("starOn")
  star5.classList.remove("starOn")
  localStorage.setItem(`key_starScore`, 4)
})
star5.addEventListener("click",() => {
  star1.classList.add("starOn")
  star2.classList.add("starOn")
  star3.classList.add("starOn")
  star4.classList.add("starOn")
  star5.classList.add("starOn")
  localStorage.setItem(`key_starScore`, 5)
})


//리뷰작성 사진 업로드 
const plusPic1Btn = document.querySelector(".plusPicLabel1")
const plusPic1 = document.querySelector(".plusPic1")
const writeReview_pic_plus2 = document.querySelector("#writeReview_pic_plus2");

// localStorage.setItem(`key_ReviewPic1`, null);
// localStorage.setItem(`key_ReviewPic2`, null);
// localStorage.setItem(`key_ReviewPic3`, null);

plusPic1.addEventListener("change", function(event) {
  const file = event.target.files[0];
  plusPic1Btn.style.background = `url("/Team_img/${file.name}") center center no-repeat`;
  plusPic1Btn.style.backgroundSize = `cover`
  document.querySelector(".plusPicLabel1 i").style.opacity = `0`;
  localStorage.setItem(`key_ReviewPic1`,file.name);
  writeReview_pic_plus2.style.display = 'block'
});


const plusPic2Btn = document.querySelector(".plusPicLabel2")
const plusPic2 = document.querySelector(".plusPic2")
const writeReview_pic_plus3 = document.querySelector("#writeReview_pic_plus3");

plusPic2.addEventListener("change", function(event) {
  const file = event.target.files[0];
  plusPic2Btn.style.background = `url("/Team_img/${file.name}") center center no-repeat`;
  plusPic2Btn.style.backgroundSize = `cover`
  document.querySelector(".plusPicLabel2 i").style.opacity = `0`
  localStorage.setItem(`key_ReviewPic2`,file.name)
  writeReview_pic_plus3.style.display = 'block'
});


const plusPic3Btn = document.querySelector(".plusPicLabel3")
const plusPic3 = document.querySelector(".plusPic3")
const writeReview_pic_plus4 = document.querySelector("#writeReview_pic_plus4")

plusPic3.addEventListener("change", function(event) {
  const file = event.target.files[0];
  plusPic3Btn.style.background = `url("/Team_img/${file.name}") center center no-repeat`;
  plusPic3Btn.style.backgroundSize = `cover`
  document.querySelector(".plusPicLabel3 i").style.opacity = `0`
  localStorage.setItem(`key_ReviewPic3`,file.name)
  writeReview_pic_plus4.style.display = `block`
});
const plusPic4Btn = document.querySelector(".plusPicLabel4")
const plusPic4 = document.querySelector(".plusPic4")
const writeReview_pic_plus5 = document.querySelector("#writeReview_pic_plus5")

plusPic4.addEventListener("change", function(event) {
  const file = event.target.files[0];
  plusPic4Btn.style.background = `url("/Team_img/${file.name}") center center no-repeat`;
  plusPic4Btn.style.backgroundSize = `cover`
  document.querySelector(".plusPicLabel4 i").style.opacity = `0`
  localStorage.setItem(`key_ReviewPic4`,file.name)
  writeReview_pic_plus5.style.display = `block`
  plusPic1Btn.style.width = "65px"
  plusPic2Btn.style.width = "65px"
  plusPic3Btn.style.width = "65px"
  plusPic4Btn.style.width = "65px"
  plusPic5Btn.style.width = "65px"
});

const plusPic5Btn = document.querySelector(".plusPicLabel5")
const plusPic5 = document.querySelector(".plusPic5")

plusPic5.addEventListener("change", function(event) {
  const file = event.target.files[0];
  plusPic5Btn.style.background = `url("/Team_img/${file.name}") center center no-repeat`;
  plusPic5Btn.style.backgroundSize = `cover`
  document.querySelector(".plusPicLabel5 i").style.opacity = `0`
  localStorage.setItem(`key_ReviewPic5`,file.name)
});

// ======= 해쉬태그, 텍스트에어리어
const hash1 = document.querySelector("#hash1")
const hash2 = document.querySelector("#hash2")
const hash3 = document.querySelector("#hash3")
const writeReview_textarea = document.querySelector(".writeReview_textarea_textarea")

const writebutton = document.querySelector("#writebutton")

hash1.addEventListener("keyup", () => {
  if(hash1.value !== "") {
    hash2.style.display = 'block'
  } else {
    hash2.style.display = 'none'
  }
})
hash2.addEventListener("keyup", () => {
  if(hash2.value !== "") {
    hash3.style.display = 'block'
  } else {
    hash3.style.display = 'none'
  }
})


const review_error = document.querySelector(".review_error");
const review_error_noText = document.querySelector(".review_error_noText");
writebutton.addEventListener("click", function(){
  const textareaData = writeReview_textarea
  const hash1Data = hash1
  const hash2Data = hash2
  const hash3Data = hash3

  localStorage.setItem(`key_hash1Data`,hash1Data.value)
  localStorage.setItem(`key_hash2Data`,hash2Data.value)
  localStorage.setItem(`key_hash3Data`,hash3Data.value)
  window.localStorage.setItem(`key_textareaData`,`${textareaData.value}`)
  if (localStorage.getItem('key_nickname') == null) {
    review_error.style.display = 'block'
  } else if (localStorage.getItem(`key_textareaData`) == "") {
    review_error_noText.style.display = 'block'
  } else {
    var link = '/mobile_html/shopdetail.html';
    location.href = link
  }
  
})
