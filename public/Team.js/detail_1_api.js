var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.566818796700375, 126.97865226036578), // 지도의 중심좌표
        level: 9 // 지도의 확대 레벨
    };
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
      content: '<div>조앤도슨</div>', 
        latlng: new kakao.maps.LatLng(37.544498204066336, 127.04912363066825)
    },
    {
      content: '<div>비하인드</div>', 
        latlng: new kakao.maps.LatLng(37.54927800461244, 126.91965354518277)
    },
    {
      content: '<div>토스티데이즈</div>', 
        latlng: new kakao.maps.LatLng(37.54518500269266, 126.98485948062533)
    },
    {
      content: '<div>프렌치 망원</div>',
        latlng: new kakao.maps.LatLng(37.55851739895487, 126.90355877265216)
    },
    {
      content: '<div>푸쉬오프 커피앤 바</div>',
        latlng: new kakao.maps.LatLng(37.55633205758039, 126.9063909554979)
    }
];

for (var i = 0; i < positions.length; i ++) {
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng // 마커의 위치
  });

  // 마커에 표시할 인포윈도우를 생성합니다 
  var infowindow = new kakao.maps.InfoWindow({
      content: positions[i].content // 인포윈도우에 표시할 내용
  });

  // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
  // 이벤트 리스너로는 클로저를 만들어 등록합니다 
  // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
  kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
  kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
  return function() {
      infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
  return function() {
      infowindow.close();
  };
}
