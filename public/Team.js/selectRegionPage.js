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
