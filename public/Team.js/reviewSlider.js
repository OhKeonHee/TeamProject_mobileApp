
//리뷰페이지 이미지슬라이더
window.onload = function reviewSlider() {
  let curPos =0;
  let position = 0;
  let startX,endX;
  const img_width = 135;
  const shopdetail_review_photo_imgs = document.querySelectorAll(".shopdetail_review_photo_imgs")

  
  
  
  shopdetail_review_photo_imgs.forEach((el)=>{
    const ImgTag = el.getElementsByTagName('img')
    if(ImgTag[2].style.display != `none`){
      el.addEventListener("touchstart", touch_start)
      function touch_start(event) {
        startX = event.touches[0].pageX
      }
    }
  })
  


  shopdetail_review_photo_imgs.forEach((el) => {
    const ImgTag = el.getElementsByTagName('img')
    if(ImgTag[2].style.display != `none`){
      el.addEventListener("touchend",touch_end)

      function touch_end(event) {
        endX = event.changedTouches[0].pageX;
        if(startX > endX){
          next();
          console.log("터치확인 넥스트함수");
        }else{
          prev();
          console.log("터치확인 프리브함수");
        }
      }
      function prev(){
        if(curPos > 0){
          position += img_width;
          el.style.transform = `translateX(${position}px)`;
          curPos = curPos - 1;
        }
      }
      function next(){
        if(curPos < 3){
          position -= img_width;
          el.style.transform = `translateX(${position}px)`;
          curPos = curPos + 1;
        } 
      }  
    }
  })
}