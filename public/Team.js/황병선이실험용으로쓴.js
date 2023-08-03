
let reviewData = localStorage.getItem(`review`);
document.querySelector(".shopdetail_main_title").innerText = reviewData.text


//리뷰페이지 이미지슬라이더
let curPos =0;
let position = 0;
let startX,endX;
const img_width = 135;
const shopdetail_review_photo_imgs = document.querySelectorAll(".shopdetail_review_photo_imgs")



shopdetail_review_photo_imgs.forEach((el)=>{
  el.addEventListener("touchstart", touch_start)
  function touch_start(event) {
    startX = event.touches[0].pageX
  }
})

shopdetail_review_photo_imgs.forEach((el) => {
  el.addEventListener("touchend",
  touch_end)
  function touch_end(event) {
    endX = event.changedTouches[0].pageX;
    if(startX > endX){
      next();
      console.log("터치확인 넥스트함수");
    }else{
      prev();
      console.log("터치확인 프리브함수");
    }
  }
  function prev(){
    if(curPos > 0){
      position += img_width;
      el.style.transform = `translateX(${position}px)`;
      curPos = curPos - 1;
    }
  }
  function next(){
    if(curPos < 3){
      position -= img_width;
      el.style.transform = `translateX(${position}px)`;
      curPos = curPos + 1;
    }
  }  
})



// function prev(){
//   if(curPos > 0){
//     position += img_width;
//     shopdetail_review_photo_imgs.style.transform = `translateX(${position}px)`;
//     curPos = curPos - 1;
//   }
// }
// function next(){
//   if(curPos < 3){
//     position -= img_width;
//     shopdetail_review_photo_imgs.style.transform = `translateX(${position}px)`;
//     curPos = curPos + 1;
//   }
// }

// function touch_start(event) {
//   startX = event.touches[0].pageX
// }

// function touch_end(event) {
//   endX = event.changedTouches[0].pageX;
//   if(startX > endX){
//     next();
//     console.log("터치확인");
//   }else{
//     prev();
//     console.log("터치확인");
//   }
// }




// --------------관심사 페이지 관심사 선택 갯수제한

  // 체크박스 클릭시 라벨 배경 변경

  const checkboxes = document.querySelectorAll(".checkbox1") // 체크박스 all
  
  
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        const label = this.nextElementSibling;
        if (this.checked) {
          label.classList.add('checked');
        } else {
          label.classList.remove('checked');
        }
      });
    });

  // 갯수제한
  let checkCount = 0;

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      if (checkCount < 5) {
        checkCount++;
      } else {
        this.checked = false;
        alert("관심사는 5개까지만 선택 가능합니다.");
        this.nextElementSibling.classList.remove(`checked`)
      }
    } else {
      checkCount--;
    }
  });
});

// ------------------지역 페이지 지역 선택 갯수제한

const RegionCheckbox = document.querySelectorAll(".Regioncheckbox")

RegionCheckbox.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    const label = this.nextElementSibling;
    if (this.checked) {
      label.classList.add('checked');
    } else {
      label.classList.remove('checked');
    }
  });
});

let RegionCheckCount = 0;

RegionCheckbox.forEach(function(checkbox) {
checkbox.addEventListener('change', function() {
  if (this.checked) {
    if (RegionCheckCount < 3) {
      RegionCheckCount++;
    } else {
      this.checked = false;
      alert("관심지역은 3개까지만 선택 가능합니다.");
      this.nextElementSibling.classList.remove(`checked`)
    }
  } else {
    RegionCheckCount--;
  }
});
});




// ---------- 잔여좌석 모달 ------------

const modalBTn = document.querySelector(".leftSeatBtn") // 잔여좌석보기 버튼

modalBTn.addEventListener("click", function(){
  modal()
})

function modal() {
  const modal_leftSeat = document.querySelector(".modal_leftSeat")//모달창
  const shadow = document.querySelector(".shadow") // 그림자
  const modal_leftSeat_close = document.querySelector(".modal_leftSeat_close") //닫기버튼
  // modal_leftSeat.style.scale = 1;
  // shadow.style.opacity = 0.5;
  // shadow.style.zIndex = 2;
  const shopdetail_container = document.querySelector(".shopdetail_container")
  let height1 = shopdetail_container.offsetHeight
  shadow.style.height = height1 + 'px'
  modal_leftSeat.classList.add("modal")
  shadow.classList.add("modal")
  modal_leftSeat_close.addEventListener("click", () =>{
    modal_leftSeat.classList.remove("modal")
    shadow.classList.remove("modal")
  })
}




// -----------헤더 이미지슬라이더 --------------

const shopdetail_header_bg = document.querySelector(".shopdetail_header_bg") //배경
const shopdetail_header_slider_back = document.querySelector(".shopdetail_header_slider_back") //이전버튼
const shopdetail_header_slider_next = document.querySelector(".shopdetail_header_slider_next") // 다음버튼
const sliderCount = document.querySelector(".sliderCount") // 페이지수
shopdetail_header_bg.style.background = `url("/Team_img/podobread1.jpg") center center no-repeat`; // 기본배경설정
shopdetail_header_bg.style.backgroundSize = `cover`
let imgNum = 1;

// setInterval(imgNext, 8000)

 // 드래그
  let touchStartX = 0;
  let touchEndX = 0;

  shopdetail_header_bg.addEventListener('touchstart', function(event) {
  touchStartX = event.touches[0].clientX;
  console.log("시작"+touchStartX);
  });

  shopdetail_header_bg.addEventListener('touchmove', function(event) {
  touchEndX = event.touches[0].clientX;
  console.log("끝"+touchEndX);
  });

  shopdetail_header_bg.addEventListener('touchend', function(event) {
  if (touchEndX < touchStartX) {
    console.log("오른쪽으로드래그확인");
    imgNext();
  }else if(touchEndX > touchStartX){
    console.log("왼쪽으로 드래그 확인");
    imgBack();
  }
  });

// ---------------- 다음버튼 함수
shopdetail_header_slider_next.addEventListener("click", function(e){
    imgNext()
    console.log("클릭 확인");
})


  function imgNext() {
    imgNum++;
      shopdetail_header_bg.style.background = `url("/Team_img/podobread${imgNum}.jpg") center center no-repeat`;
      shopdetail_header_bg.style.backgroundSize = `cover`
    if (imgNum > 7) {
      imgNum = 1;
      shopdetail_header_bg.style.background = `url("/Team_img/podobread${imgNum}.jpg") center center no-repeat`
      shopdetail_header_bg.style.backgroundSize = `cover`
    }
    sliderCount.innerText = imgNum
  }

  //  --------- 이전버튼 함수
  shopdetail_header_slider_back.addEventListener("click", function(e){
      imgBack() // 드래그랑 터치가 같이되는 문제 해결
  })
  
    function imgBack() {
      imgNum--;
        shopdetail_header_bg.style.background = `url("/Team_img/podobread${imgNum}.jpg") center center no-repeat`;
        shopdetail_header_bg.style.backgroundSize = `cover`
      if (imgNum < 1) {
        imgNum = 7;
        shopdetail_header_bg.style.background = `url("/Team_img/podobread${imgNum}.jpg") center center no-repeat`
        shopdetail_header_bg.style.backgroundSize = `cover`
      }
      sliderCount.innerText = imgNum
    }



    // -------------메뉴바 클릭

  const shopdetail_gnb_home = document.querySelector(".shopdetail_gnb_home")//홈버튼
  const shopdetail_gnb_menu = document.querySelector(".shopdetail_gnb_menu")//메뉴버튼
  const shopdetail_gnb_review = document.querySelector(".shopdetail_gnb_review")//리뷰버튼

  const shopdetail_content = document.querySelector(".shopdetail_content")
  const shopdetail_menu = document.querySelector(".shopdetail_menu")
  const shopdetail_review = document.querySelector(".shopdetail_review")

  shopdetail_gnb_home.addEventListener("click",function(){
    shopdetail_content.style.display = `block`
    shopdetail_menu.style.display = `none`
    shopdetail_review.style.display = `none`
    shopdetail_gnb_home.classList.remove("menuoff")
    shopdetail_gnb_home.classList.add("menuon")
    shopdetail_gnb_menu.classList.add("menuoff")
    shopdetail_gnb_review.classList.add("menuoff")
  }
  )


  shopdetail_gnb_menu.addEventListener("click",function(){
    shopdetail_content.style.display = `none`
    shopdetail_menu.style.display = `block`
    shopdetail_review.style.display = `none`
    shopdetail_gnb_menu.classList.remove("menuoff")
    shopdetail_gnb_menu.classList.add("menuon")
    shopdetail_gnb_home.classList.add("menuoff")
    shopdetail_gnb_review.classList.add("menuoff")
  }
  )
  
  shopdetail_gnb_review.addEventListener("click",function(){
    shopdetail_content.style.display = `none`
    shopdetail_menu.style.display = `none`
    shopdetail_review.style.display = `flex`
    shopdetail_gnb_review.classList.remove("menuoff")
    shopdetail_gnb_review.classList.add("menuon")
    shopdetail_gnb_home.classList.add("menuoff")
    shopdetail_gnb_menu.classList.add("menuoff")
  }
  )




  //-------------요일에 따른 영업시간

  const dayOpenTime = document.querySelector(".dayOpenTime")
  const Today = new Date().getDay()
  
  function OpenTime() {
    switch (Today) {
      case 1:
        dayOpenTime.innerText = "(월) 10:00 ~ 20:00 (19:00 Last Oder)"
        break;
      case 2:
        dayOpenTime.innerText = "(화) 12:00 ~ 20:00 (19:00 Last Oder)"
        break;
      case 3:
        dayOpenTime.innerText = "(수) 12:00 ~ 20:00 (19:00 Last Oder)"
        break;
      case 4:
        dayOpenTime.innerText = "(목) 12:00 ~ 20:00 (19:00 Last Oder)"
        break;
      case 5:
        dayOpenTime.innerText = "(금) 12:00 ~ 22:00 (21:00 Last Oder)"
        break;
      case 6:
        dayOpenTime.innerText = "(토) 12:00 ~ 22:00 (21:00 Last Oder)"
        break;
      case 7:
        dayOpenTime.innerText = "(일) 정기휴무"
        break;
    
      default:
        break;
    }
  }

  OpenTime()