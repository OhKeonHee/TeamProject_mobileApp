/*###following_map.html 에서 .map_share 을 눌렀을 떄, .sns_tab이 나타나고 배경이나 .sns_close를 눌렀을 때, 다시 사라지는 javascript코드*/
// JavaScript 코드
document.querySelector('.map_share').addEventListener('click', function() {
  document.querySelector('.sns_tab').style.display = 'flex';
});
document.querySelector('.sns_close').addEventListener('click', function() {
  document.querySelector('.sns_tab').style.display = 'none';
});
 // 배경은 안됨 클릭자체를 못불러옴

