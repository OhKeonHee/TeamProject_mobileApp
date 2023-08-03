const heart = document.querySelector("#heart");
const thumb = document.querySelector("#thumb");
const thumb_num = document.querySelector("#thumb_num");
const reply_icon = document.querySelector("#reply_icon");
const heart_div = document.querySelector("#heart_div");

heart.addEventListener("click", () => {
  heart.classList.toggle("heart_color")
  heart_div.classList.toggle("heart_div_ani")
  if(heart.className == "heart_color") {
    heart_num.innerText = "7"
    heart_num.style.color = "crimson"
    heart_num.style.fontWeight = "bold"
  } else {
    heart_num.innerText = "6"
    heart_num.style.color = "black"
    heart_num.style.fontWeight = "normal"
  }
})


thumb.addEventListener("click", () => {
  thumb.classList.toggle("heart_color");
  if(thumb.className == "heart_color") {
    thumb_num.innerText = "4"
    thumb_num.style.color = "crimson"
    thumb_num.style.fontWeight = "bold"
  } else {
    thumb_num.innerText = "3"
    thumb_num.style.color = "black"
    thumb_num.style.fontWeight = "normal"
  }
})


const reply_txt = document.querySelector(".reply_txt");
const reply_input = document.querySelector("#reply_input");
const reply_submit = document.querySelector("#reply_submit");
const reply_err_div = document.querySelector("#reply_err_div");
const login_err_div = document.querySelector("#login_err_div");


reply_submit.addEventListener("click", (e) => {
  let nicknameKey = localStorage.getItem('key_nickname');
  let thumbnailKey = localStorage.getItem('key_thumbnail');
  let reply_input_value = reply_input.value;

  if(thumbnailKey == null) {
    thumbnailKey = "https://t1.daumcdn.net/cfile/tistory/99455A3359CAEFDA1B"
  }

  if(reply_input_value !== "" && nicknameKey !== "") {
    reply_txt.innerHTML += `
    <div class="post" id="post4">
      <div id="userImage">
        <img src="${thumbnailKey}" alt="">
      </div>
      <div class="post_right">
        <h3 id="userName">${nicknameKey}</h3>
        <a href="#"><span id="post_txt">${reply_input_value}</span></a>
        <div id="post_footer">
          <span id="post_time">방금</span>
        </div>
      </div>
    </div>`;
    reply_input.value = "";
  } else if (reply_input_value == "") {
    reply_err_div.classList.toggle("heart_div_ani")
  }
  if (localStorage.getItem('key_nickname') == null) {
    login_err_div.classList.toggle("heart_div_ani");
    document.querySelector("#post4").style.display ='none'
    document.querySelector("#post5").style.display ='none'
    document.querySelector("#post6").style.display ='none'
  }
})


