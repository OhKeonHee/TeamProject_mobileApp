function setThumbnail(event) {
  var reader = new FileReader();

  reader.onload = function(event) {
    var img = document.createElement("img");
    img.setAttribute("src", event.target.result);
    document.querySelector("#userImage_select").appendChild(img).classList.add("thumbnail");
    let thumbnail = document.querySelector(".thumbnail").src
    let thumbnail_data = thumbnail;
    localStorage.setItem('key_thumbnail', thumbnail_data);
    // src경로 값을 key로 저장
  };
  reader.readAsDataURL(event.target.files[0]);
}

const nickname_input = document.querySelector("#nickname_input");
const nickname_submit = document.querySelector(".nickname_submit");
const nick_err = document.querySelector("#nickname_error");

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
})
