<template>
  <div class="content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="../../assets/imgs/1.jpg"
            alt="图片加载失败"
            title="宣传图片1"
          />
          <span></span>
        </div>
        <div class="swiper-slide">
          <img
            src="../../assets/imgs/2.jpg"
            alt="图片加载失败"
            title="宣传图片2"
          />
          <span></span>
        </div>
        <div class="swiper-slide">
          <img
            src="../../assets/imgs/3.jpg"
            alt="图片加载失败"
            title="宣传图片3"
          />
          <span></span>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  data() {},

  mounted() {
    /* eslint-disable no-new */
    new Swiper(".swiper-container", {
      spaceBetween: -10, // ——调整间距

      autoplay: {
        delay: 3000,
        disableOnInteraction: false // 取消鼠标操作后的轮播暂停【无操作轮播继续】【参考链接1】
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      loop: true,

      centeredSlides: true, //内容居中
      slidesPerView: 3 // ——设置slider容器能够同时显示的slides数量(carousel模式)。另外，支持'auto'

      // coverflow: {
      //   rotate: 0, //侧转角度（正值凹陷）
      //   stretch: -200, //每个slide之间拉伸值（正值紧贴）
      //   depth: -3000, //值越大为远景（可负值）
      //   modifier: 1,
      //   shadows: false
      // }
    });
  }
};
</script>

<style lang="css" scoped>
.content {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.swiper-container {
  width: 100%;
  padding-top: 0.5rem;
  background-color: red;
}
.swiper-slide {
  width: 1080px;

  height: 500px;
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* —— 控制大小 */
  transform: scale(0.8);
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  /*—— 设置切换动画*/
  transform: scale(1.2);
  z-index: 11111111;
}
</style>
