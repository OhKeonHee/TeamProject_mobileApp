/* ### recommendation ### */
function enterkeySearch() {
  // 입력한 텍스트 가져오기
  let searchText = document.getElementById("search_input").value;
  
  // 모든 rec_content 요소 가져오기
  let recContents = document.getElementsByClassName("rec_content");
  
  // 검색어와 일치하는 요소만 보여주기
  for (let i = 0; i < recContents.length; i++) {
    let content = recContents[i];
    let cafeList = content.getElementsByClassName("cafeList")[0];
    let cafeName = cafeList.textContent || cafeList.innerText;
    
    // 검색어가 포함된 경우 요소 표시, 그렇지 않은 경우 숨김
    if (cafeName.includes(searchText)) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
}
