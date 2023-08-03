
//거리순, 인기순으로 나열

// 거리순으로 정렬하는 함수

const badgeShortButton = document.getElementById("badge_short");
badgeShortButton.addEventListener("click", sortByDistanceDescending);

function sortByDistanceDescending() {
  const placeSuggestions = Array.from(document.querySelectorAll(".map_place_suggestion"));

  placeSuggestions.sort(function(a, b) {
    const distanceA = parseInt(a.querySelector(".distance").textContent);
    const distanceB = parseInt(b.querySelector(".distance").textContent);
    return distanceA - distanceB;
  });

  const parent = document.querySelector(".map_recommendation");
  parent.innerHTML = "";
  placeSuggestions.forEach(function(place) {
    parent.appendChild(place);
  });

  badgeShortButton.style.color = "#BB9174";
  badgePopularButton.style.color = "black";
  // 다른 버튼 텍스트 컬러 원상복구
  // (추가 버튼이 있다면 여기에 추가해주세요)
}

// 인기순으로 정렬하는 함수
const badgePopularButton = document.getElementById("badge_popular");
badgePopularButton.addEventListener("click", sortByPopularityDescending);

function sortByPopularityDescending() {
  const suggestions = Array.from(document.getElementsByClassName("map_place_suggestion"));

  suggestions.sort(function(a, b) {
    const likesA = parseInt(a.querySelector(".likes").textContent);
    const likesB = parseInt(b.querySelector(".likes").textContent);
    return likesB - likesA;
  });

  const parentElement = suggestions[0].parentNode;
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }

  suggestions.forEach(function(suggestion) {
    parentElement.appendChild(suggestion);
  });

  badgeShortButton.style.color = "black";
  badgePopularButton.style.color = "#BB9174";
  // 다른 버튼 텍스트 컬러 원상복구
  // (추가 버튼이 있다면 여기에 추가해주세요)
}




// arrowDown 버튼, 더보기 버튼 
const main_map_inner = document.querySelector(".main_map_inner");
const angleDown = document.querySelector("#angleDown");
const angleUp = document.querySelector("#angleUp");

angleDown.addEventListener("click", () => {
  main_map_inner.style.display = 'none';
  main_map_inner.style.transition = '1s';
  angleUp.style.display = 'block'
})
angleUp.addEventListener("click", () => {
  main_map_inner.style.display = 'block';
  angleUp.style.display = 'none'
})

//기능 구현 못한 거 (아래 3개)
//********#angleDown버튼 눌렀을 때  => 
// 1. map_inner가 내려가고, 화살표 있는 윗부분만 살짝 보이게 하기 
// 2.angleDown 버튼은 angleUp버튼으로 자동으로 바뀌게 하기 
//3.지도 사이즈가 390x500으로 지정되어져있는데, angleDown 클릭되었을땐, 높이값 늘어나야함 
// (============ 완료) 하지만 지도 사이즈는 js로 가져오기만 해도 안보여짐 애초에 api를 잘못땀

// 더보기 눌렀을 때, 숨겨진 컨텐츠 보이게 하기
// (============ 완료)



const mainMapInner = document.querySelector('.main_map_inner');
const moreBtn = document.getElementById('map_info_more');
const moreSuggestions = document.querySelectorAll('.map_place_suggestion.more');

// 더보기 버튼 클릭 시 추가 정보가 보이도록 처리합니다.
moreBtn.addEventListener('click', function() {
  moreSuggestions.forEach(function(suggestion) {
    moreBtn.style.display = 'none'
    suggestion.style.display = 'block';
    mainMapInner.style.height = "1700px"
  });
});