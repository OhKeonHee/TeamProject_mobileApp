/*###my_list_page.html에서 .btn_delitem을 누르면 해당하는 .view_item이 사라지게 만드는 코드*/
// JavaScript 코드
let delButtons = document.querySelectorAll('.btn_delitem');

delButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    let viewItem = button.closest('.view_item');
    viewItem.style.display = 'none';
  });
});
