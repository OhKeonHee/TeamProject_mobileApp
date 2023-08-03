// Share 버튼 눌렀을 때 모달 창 떠요
// url 링크는 전체 완성되고 나서 링크 걸어야 할 거 같아요 


//share" 버튼 요소를 가져옴
const shareButtons = document.querySelectorAll(".detail_badge.detail_share_btn");

// 모달 창 요소들을 가져옴
const modal = document.querySelector(".detail_share_modal");
const detail_section = document.querySelector(".detail_section")
const closeButton = document.getElementById("detail_modal_close");
const copyButton = document.getElementById("detail_copy_button");
const urlInput = document.getElementById("snsUrlInput");


// "share" 버튼 클릭 이벤트 리스너 추가
shareButtons.forEach((shareButton) => {
  shareButton.addEventListener("click", function() {
    modal.style.display = "block" // 모달 창 열기
    detail_section.style.backgroundColor = "rgba(0, 0, 0, 0.3)";

    // 파라미터를 받아 URL을 생성하는 함수
    function createURL(baseUrl, params) {
      let url = baseUrl;
      // 파라미터를 URL에 추가
      for (let key in params) {
        if (params.hasOwnProperty(key)) {
          url += (url.indexOf('?') === -1 ? '?' : '&') + key + '=' + encodeURIComponent(params[key]);
        }
      }
      return url;
    }

    const baseUrl = 'https://www.ipsomoon.com/';
    const params = {
      param1: 'value1',
      param2: 'value2'
    };
    const url = createURL(baseUrl, params);
    urlInput.innerText = `${url}`;
    // console.log(url)
  });
});
// 닫기 버튼 클릭 이벤트 리스너 추가
closeButton.addEventListener("click", () => {
  modal.style.display = "none"; // 모달 창 닫기
  detail_section.style.backgroundColor = "white";
});

// "Copy" 버튼 클릭 이벤트 리스너 추가
copyButton.addEventListener("click", () => {
  urlInput.select(); // URL 입력란 선택
  document.execCommand("copy"); // 복사 명령 실행
  alert(`URL 복사 완료`)
  
});
window.alert = (message) => {
  // const modal = document.querySelector(".detail_share_modal");
  modal.style.display = "none";
  setTimeout(() => {
    modal.style.display = "";
    detail_section.style.backgroundColor = "white";
    const result = window.confirm(message);
    if (!result) {
      modal.style.display = "none";
    }
  }, 100);
};

// 카카오톡 버튼 클릭 이벤트 리스너 추가
const kakaoTalkButton = document.getElementById("kakaotalkButton");
kakaoTalkButton.addEventListener("click", () => {
  shareToSNS("kakaotalk"); // 카카오톡으로 공유
});

// 네이버 버튼 클릭 이벤트 리스너 추가
const naverButton = document.getElementById("naverButton");
naverButton.addEventListener("click", () => {
  shareToSNS("naver"); // 네이버로 공유
});

// 구글 버튼 클릭 이벤트 리스너 추가
const googleButton = document.getElementById("googleButton");
googleButton.addEventListener("click", () => {
  shareToSNS("google"); // 구글로 공유
});


