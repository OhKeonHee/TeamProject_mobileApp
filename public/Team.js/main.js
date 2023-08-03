let nicknameKey = localStorage.getItem('key_nickname');
let nickname = document.querySelector("#nickname");
if(nicknameKey == null) {
  nicknameKey = "둘러보는 예비소문러"
}
nickname.innerHTML = ` ${nicknameKey}`;


// 입소문러 추천 자동 슬라이드 

const sug_slider = document.querySelector('.suggestion_slider');
const sliderImages = document.querySelectorAll('.suggestion_content');
const sliderContainerWidth = document.querySelector('.suggestion_slider_container').offsetWidth;
const slideWidth = sliderContainerWidth / 2;
let currentTranslate = 0;

sug_slider.style.transform = `translateX(${currentTranslate}px)`;

sug_slider.addEventListener('transitionend', checkSlideEnd);
sug_slider.addEventListener('mouseenter', pauseSlider);
sug_slider.addEventListener('mouseleave', startSlider);

function checkSlideEnd() {
  if (currentTranslate === -slideWidth * (sliderImages.length - 2)) {
    sug_slider.style.transition = 'none';
    currentTranslate = 0;
    sug_slider.style.transform = `translateX(${currentTranslate}px`;
  }
}

function startSlider() {
  intervalId = setInterval(() => {
    currentTranslate -= slideWidth;
    sug_slider.style.transition = 'transform 0.5s ease-in-out';
    sug_slider.style.transform = `translateX(${currentTranslate}px)`;
  }, 2000);
}

function pauseSlider() {
  clearInterval(intervalId);
}



//소문러스 톡 터치 슬라이드

// Get the slider container and slider elements
const com_container = document.querySelector('.community_slider_container');
const com_slider = document.querySelector('.community_slider');

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
    if(-620 < currentTranslate2 && currentTranslate2 < 20){
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


