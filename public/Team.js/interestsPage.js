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