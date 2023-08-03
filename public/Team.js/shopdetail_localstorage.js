//// //로컬스토리지
let thumbnailKey = localStorage.getItem('key_thumbnail');
if(thumbnailKey == null) {
  thumbnailKey = "https://t1.daumcdn.net/cfile/tistory/99455A3359CAEFDA1B"
}


function ReviewPrint() {
  const newReview = document.createElement("div")
  newReview.classList.add("shopdetail_review_list")

  let style1 = ""
  let style2 = ""
  let style3 = ""
  let style4 = ""
  let style5 = ""
  let img1 = null
  let img2 = null
  let img3 = null
  let img4 = null
  let img5 = null
  localStorage.getItem("key_ReviewPic1") ? img1 = localStorage.getItem("key_ReviewPic1") : style1 = `style="display: none;"`
  localStorage.getItem("key_ReviewPic2") ? img2 = localStorage.getItem("key_ReviewPic2") : style2 = `style="display: none;"`
  localStorage.getItem("key_ReviewPic3") ? img3 = localStorage.getItem("key_ReviewPic3") : style3 = `style="display: none;"`
  localStorage.getItem("key_ReviewPic4") ? img4 = localStorage.getItem("key_ReviewPic4") : style4 = `style="display: none;"`
  localStorage.getItem("key_ReviewPic5") ? img5 = localStorage.getItem("key_ReviewPic5") : style5 = `style="display: none;"`

  let hashStyle1 = ""
  let hashStyle2 = ""
  let hashStyle3 = ""
  let hash1 = ""
  let hash2 = ""
  let hash3 = ""

  localStorage.getItem(`key_hash1Data`) ? hash1 = localStorage.getItem(`key_hash1Data`) : hashStyle1 = `style="display: none;"`
  localStorage.getItem(`key_hash2Data`) ? hash2 = localStorage.getItem(`key_hash2Data`) : hashStyle2 = `style="display: none;"`
  localStorage.getItem(`key_hash3Data`) ? hash3 = localStorage.getItem(`key_hash3Data`) : hashStyle3 = `style="display: none;"`


  newReview.innerHTML += `
    <div class="shopdetail_review_profile" id="add_review_profile">
      <div class="shopdetail_review_profile_imgId">
        <img src="${thumbnailKey}" alt="로컬스토리지 프로필">
        <span>${localStorage.getItem('key_nickname')}</span>
      </div>
      <div class="shopdetail_review_profile_button">
      <p><i class="fas fa-star"></i> <span class="reviewScore"></span></p>
        <button><span>팔로우</span></button>
      </div>
    </div>
    <div class="shopdetail_review_photo" id="add_review_imgs">
      <div class="shopdetail_review_photo_imgs">
        <div class="shopdetail_review_photo_img1" id="add_review_pic1"><img ${style1} src="/Team_img/${img1}" alt="리뷰1"></div>
        <div class="shopdetail_review_photo_img2" id="add_review_pic2"><img ${style2} src="/Team_img/${img2}" alt="리뷰2"></div>
        <div class="shopdetail_review_photo_img3" id="add_review_pic3"><img ${style3} src="/Team_img/${img3}" alt="리뷰3"></div>
        <div class="shopdetail_review_photo_img4" id="add_review_pic3"><img ${style4} src="/Team_img/${img4}" alt="리뷰4"></div>
        <div class="shopdetail_review_photo_img5" id="add_review_pic3"><img ${style5} src="/Team_img/${img5}" alt="리뷰5"></div>
      </div>
    </div>
    <div class="shopdetail_review_textbox" id="add_review_textarea">
      <div class="shopdetail_review_textbox_text">
        <span>${localStorage.getItem(`key_textareaData`)}
        </span>
      </div>
      <div class="shopdetail_review_textbox_hashtag" id="add_hashtag">
        <span ${hashStyle1} id="add_hash1"># ${hash1}</span>
        <span ${hashStyle2} id="add_hash2"># ${hash2}</span>
        <span ${hashStyle3} id="add_hash3"># ${hash3}</span>
      </div>
    </div>
  `
  document.querySelector(".shopdetail_review_list_wrap").prepend(newReview)
  
  let add_review_imgs = document.querySelector("#add_review_imgs");
  let add_hashtag = document.querySelector("#add_hashtag");
  let add_review_profile = document.querySelector("#add_review_profile")
  let add_review_textarea = document.querySelector("#add_review_textarea")

  if(img1 == null) {
    add_review_imgs.style.display = 'none'
  } else if(hash1 == null) {
    add_hashtag.style.disply = 'none'
  }

  if(localStorage.getItem('key_nickname') == null && localStorage.getItem('key_textareaData') == null) {
    add_review_profile.style.display ='none'
    add_review_imgs.style.display ='none'
    add_review_textarea.style.display ='none'
  }
}

if(localStorage.getItem('key_textareaData')){
  ReviewPrint();
}


// const add_review_imgs = document.querySelector("#add_review_imgs");
// const add_review_pic1 = document.querySelector("#add_review_pic1");
// const add_review_pic2 = document.querySelector("#add_review_pic2");
// const add_review_pic3 = document.querySelector("#add_review_pic3");

// if(localStorage.getItem(`key_ReviewPic1`).value == null) {
//   add_review_imgs.style.display = 'none'
// }
// if(localStorage.getItem(`key_ReviewPic2`).value == null) {
//   add_review_pic2.style.display = 'none'
// }
// if(localStorage.getItem(`key_ReviewPic3`).value == null) {
//   add_review_pic3.style.display = 'none'
// }

// const add_hashtag = document.querySelector("#add_hashtag");
// const add_hash1 = document.querySelector("#add_hash1");
// const add_hash2 = document.querySelector("#add_hash2");
// const add_hash3 = document.querySelector("#add_hash3");

// if(localStorage.getItem(`key_hash1Data`).value == null) {
//   add_hashtag.style.display = 'none'
// }
// if(localStorage.getItem(`key_hash2Data`).value == null) {
//   add_hash2.style.display = 'none'
// }
// if(localStorage.getItem(`key_hash3Data`).value == null) {
//   add_hash3.style.display = 'none'
// }

