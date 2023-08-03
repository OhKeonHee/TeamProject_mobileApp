// ### nickname.html ###
let yearSelect = document.querySelector("#yearSelect");
let monthSelect = document.querySelector("#monthSelect");
let daySelect = document.querySelector("#daySelect");

// 현재 연도 가져오기
let currentYear = new Date().getFullYear();

// 연도 선택 옵션 추가
for (let i = 1950; i <= currentYear; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
}

// 월 선택 옵션 추가
for (let i = 1; i <= 12; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    monthSelect.appendChild(option);
}

// 일 선택 옵션 추가
for (let i = 1; i <= 31; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.text = i;
  daySelect.appendChild(option);
}

// 대표이미지 설정
function setThumbnail(event) {
  let reader = new FileReader();

  reader.onload = function(event) {
    let img = document.createElement("img");
    img.setAttribute("src", event.target.result);
    document.querySelector("#userImage_select").appendChild(img).classList.add("thumbnail");
    let thumbnail = document.querySelector(".thumbnail").src
    let thumbnail_data = thumbnail;
    localStorage.setItem('key_thumbnail', thumbnail_data);
    // src경로 값을 key로 저장
  };
  reader.readAsDataURL(event.target.files[0]);
}

// localStorage로 저장해서 다른 js에서 불러오도록 하기
const image_input = document.querySelector("#image_select");
const nickname_input = document.querySelector("#nickname_input");
const nickname_submit = document.querySelector(".nickname_submit");

// 유효성 검사
let email = document.querySelector("#email_input");
let password = document.querySelector("#password_input");

const nick_err = document.querySelector("#nickname_error");
const email_err = document.querySelector("#email_error");
const password_err = document.querySelector("#password_error");


nickname_submit.addEventListener("click", (e) => {
  let nickname_data = nickname_input.value;
  localStorage.setItem('key_nickname', nickname_data);

  if(nickname_input.value == "") {
    nick_err.style.display = 'block'
    nickname_input.focus();
    e.preventDefault();
  } else {
    nick_err.style.display = 'none'
  }
  if(email.value == "" || email.value.includes('@') == false) {
    email_err.style.display = 'block'
    email.focus();
    e.preventDefault();
  } else {
    email_err.style.display = 'none'
  }
  if(password.value.length >= 4 && password.value.length <= 15) {
    password_err.style.display = 'none'
  } else {
    password_err.style.display = 'block'
    password.focus();
    e.preventDefault();
  }
})
