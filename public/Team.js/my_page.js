const selectTimeline = document.querySelector(".select_timeline");

const selectImg = document.querySelector(".select_img");

const imgBtn = document.getElementById("btn_img");
const timelineBtn = document.getElementById("btn_timeline");

timelineBtn.addEventListener('click', () => {
  selectTimeline.style.display = "block"
  selectImg.style.display = "none"
  timelineBtn.style.color = "#4c3525"
  imgBtn.style.color = "#7c6e62"
})

imgBtn.addEventListener('click', () => {
  selectTimeline.style.display = "none"
  selectImg.style.display = "block"
  timelineBtn.style.color = "#7c6e62"
  imgBtn.style.color = "#4c3525"
})


const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const daylogPage = document.querySelector('.mypage_daylog');
const commentPage = document.querySelector('.mypage_comment');
const daylogTitle = document.getElementById('daylog_title');
const commentTitle = document.getElementById('comment_title');

daylogTitle.addEventListener('click', () => {
  daylogPage.style.display = "block"
  commentPage.style.display = "none"
})
commentTitle.addEventListener('click', () => {
  commentPage.style.display = 'block';
  daylogPage.style.display = 'none'
})

let error_noLogin = document.querySelector(".error_noLogin")
if (localStorage.getItem('key_nickname') == null) {
  error_noLogin.style.display = 'block'
  } else {
    error_noLogin.style.display = 'none'
  }