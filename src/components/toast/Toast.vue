<template>
  <transition @before-leave="beforeLeave" @after-leave="afterLeave" name="slide-fade">
    <div @click="hideToast" v-show="isShow" class="toast">
      <div class="main">
        <div v-if="type" class="icon-box" flex="main:center cross:center">
          <i v-show="type==='succeed'" class="iconfont icon-ic_select_simple font30 orange2"></i>
        </div>
        <div class="text">
          {{text}}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      text: {type: String},
      time: {type: Number},
      type: {type: String},
    },
    mounted() {
      this.$nextTick(() => {
        this.isShow = true;
        this.timer = setTimeout(() => {
          this.hideToast();
        }, this.time)
      });
    },
    data() {
      return {
        isShow: false,
        timer: null,
      };
    },
    methods: {
      hideToast() {
        this.isShow = false;
        clearTimeout(this.timer);
        this.timer = null;
      },
      beforeLeave() {
        this.close();
      },
      afterLeave() {
        document.body.removeChild(this.$el);
      }
    }
  }
</script>


<style>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 9999;
    .main {
      display: inline-block;
      padding: 0.2rem 0.4rem;
      min-width: 2.6rem;
      max-width: 4.4rem;
      border-radius: .04rem;
      background-color: rgba(66, 63, 56, 0.8);
      .icon-box {
        margin: 0 auto .1rem;
        width: .7rem;
        height: .7rem;
        border-radius: 50%;
        overflow: hidden;
        background-color: #fff;
      }
      .text {
        font-size: 0.3rem;
        line-height: .45rem;
        color: #fff;
      }
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }

  .slide-fade-enter {
    transform: translate(-50%, -1.2rem);
    opacity: 0;
  }

  .slide-fade-leave-to {
    transform: translate(-50%, 0.5rem);
    opacity: 0;
  }
</style>
