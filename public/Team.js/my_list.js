
const newListButton = document.querySelectorAll('.newListButton');

const newListContent = document.querySelector('.new_list_content');

const newList = document.querySelector(".new_list");

const deleteBtn = document.getElementById('list_deleteBtn')
const showMap = document.getElementById('show_map') // 이거는 왜 사라지는건지 야쭤보기
// Add click event listener to the new_list button


  newListButton.forEach((el) => {
  el.addEventListener('click', function() {
  newListFunc()
  })
});


  function newListFunc() {
    newListContent.style.display = 'block';
  newListContent.style.position = 'absolute';
  newListContent.style.top = '90%';
  newListContent.style.left = '50%';
  newListContent.style.transform = 'translate(-50%, -50%)';
  newListContent.style.zIndex = '99999';
  newListContent.style.background = '#fff';
  newList.style.display = 'none';
  showMap.style.display = 'none'
}



const list_boxBtn = document.querySelector(".list_box button")  // 작성확인버튼


list_boxBtn.addEventListener("click", () => {
  createItem()
})






function createItem() {
  const list_writeSlider = document.querySelector(".list_writeSlider")
  const newListItem = document.createElement("div")
  const list_boxName = document.querySelector(".list_boxName")
  let imgnum = ~~(Math.random()*9+1)
  newListItem.classList.add("list_item")

  newListItem.innerHTML = `
  <div class="list_item">
  <a href="/mobile_html/detail_1.html"><img src="/Team_img/rec_item_0${imgnum}.jpeg" alt="샘플이미지"></a>
  <span class="cafeList">${list_boxName.value}</span>
</div>`
  if(list_boxName.value != ""){
    list_writeSlider.appendChild(newListItem)
    createBtn()
    newListContent.style.display = 'none';
    list_boxName.value = " "
  }
}

function createBtn() {
  const list_writeSlider = document.querySelector(".list_writeSlider")
  const newBtn = document.createElement("button")
  newBtn.classList.add("list_item","new_list","newListButton")
  newBtn.innerHTML = `<i class="fa-solid fa-plus"></i>
  <span>새 리스트 만들기</span>`
  list_writeSlider.appendChild(newBtn)

  newBtn.addEventListener("click", function() {
    newListFunc()
    newBtn.style.display =`none`
  })
}





deleteBtn.addEventListener('click', () => {
  newListContent.style.display = 'none'
  history.back();
})


const editBtn = document.querySelector("#space_edit");

const delspaceBtn1 = document.querySelector("#delete_myspace1");
const delspaceBtn2 = document.querySelector("#delete_myspace2");
const delspaceBtn3 = document.querySelector("#delete_myspace3");
const delspaceBtn4 = document.querySelector("#delete_myspace4");

editBtn.addEventListener("click", () => {
  editBtn.classList.toggle("editBtn_click")
  if(editBtn.classList.contains("editBtn_click")) {
    editBtn.innerText = "취소"
    delspaceBtn1.style.display = 'block';
    delspaceBtn2.style.display = 'block';
    delspaceBtn3.style.display = 'block';
    delspaceBtn4.style.display = 'block';
  } else {
    editBtn.innerText = "편집"
    delspaceBtn1.style.display = 'none';
    delspaceBtn2.style.display = 'none';
    delspaceBtn3.style.display = 'none';
    delspaceBtn4.style.display = 'none';
  }
})



//마이 리스트 터치 슬라이드

// Get the slider container and slider elements
const com_container = document.querySelector('#list_write');
const com_slider = document.querySelector('.list_writeSlider');

// Set the initial position of the slider
let initialPosition = 0;

// Variables to track mouse movement
let isDragging = false;
let startPosition = 0;
let currentTranslate2 = 0;
let previousTranslate = 0;

// Mouse events
com_container.addEventListener('mousedown', startDragging);
com_container.addEventListener('mousemove', drag);
com_container.addEventListener('mouseup', stopDragging);
com_container.addEventListener('mouseleave', stopDragging);

// Touch events (optional)
com_container.addEventListener('touchstart', startDragging);
com_container.addEventListener('touchmove', drag);
com_container.addEventListener('touchend', stopDragging);
com_container.addEventListener('touchcancel', stopDragging);

// Start dragging the slider
function startDragging(event) {
  if (event.type === 'touchstart') {
    startPosition = event.touches[0].clientX;
  } else {
    startPosition = event.clientX;
  }
  isDragging = true;

  // Get the current position of the slider
  initialPosition = getPositionX(com_slider);
}

// Drag the slider
function drag(event) {
  let Width1 = document.querySelector(".list_writeSlider").offsetWidth

  if (isDragging) {
    let currentPosition;
    if (event.type === 'touchmove') {
      currentPosition = event.touches[0].clientX;
    } else {
      currentPosition = event.clientX;
    }
    const diffPosition = currentPosition - startPosition;
    currentTranslate2 = previousTranslate + diffPosition;

    // Apply the translation to the slider
    if(-1 > currentTranslate2 && currentTranslate2 > -(Width1)){
      setSliderPosition(currentTranslate2);
    }
  }
}

// Stop dragging the slider
function stopDragging() {
  isDragging = false;

  // Save the current position for the next drag
  previousTranslate = currentTranslate2;
}

// Get the current position of an element
function getPositionX(element) {
  return element.getBoundingClientRect().left;
}

// Apply the translation to the slider
function setSliderPosition(position) {
  com_slider.style.transform = `translateX(${position}px)`;
}