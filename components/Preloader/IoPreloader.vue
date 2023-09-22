<template>
  <div
    class="io-preloader is-animating"
    :class="{ 'done-loading': !isLoadingPage }"
  >
    <div class="io-preloader__content">
      <div class="io-preloader__rainbow">
        <BaseVideo
          :poster="require('@/assets/img/rainbow-circle-black.jpg')"
          src-source="/videos/rainbow-circle-black.mp4"
        />
        <LogoSmall />
      </div>

      <div class="io-preloader__text">Loading...</div>
    </div>
    <div class="io__buttons">
      <v-btn x-large rounded dark>Let's Explore!</v-btn>
    </div>
    <kinesis-container class="io-preloader__items">
      <PreloaderItemBall
        v-for="ball in preloaderItemBall"
        :key="ball.id"
        :ball="ball"
      />
      <PreloaderItemHead
        v-for="(head, idx) in heads"
        :id="6 + (idx + 1)"
        :key="6 + (idx + 1)"
        :head="head"
        :heads="heads"
        @updateHeads="updateHeads"
      />
    </kinesis-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { preloaderItemBall } from '@/assets/data'
import { randomHead } from '@/utils/randomUtils'

export default {
  data() {
    return {
      preloaderItemBall,
      preload: true,
      heads: '',
    }
  },
  fetch() {
    this.heads = randomHead()
  },
  computed: {
    ...mapState(['isLoadingPage']),
  },
  mounted() {
    this.preload = false
  },
  methods: {
    updateHeads(val) {
      this.heads = val
    },
  },
}
</script>

<style lang="scss">
.io-preloader:not(.done-loading) .io-preloader__item .item .ball {
  transform: scale(0);
}
.io-preloader:not(.done-loading) .io__buttons .v-btn.v-btn--has-bg {
  opacity: 0;
  transform: translateY(120%);
}
.io-preloader:not(.done-loading) .io-preloader__item .item.item--7 .head {
  transform: rotate(17deg) scale(0);
}
.io-preloader:not(.done-loading) .io-preloader__item .item.item--8 .head {
  transform: rotate(-5deg) scale(0);
}
.io-preloader:not(.done-loading) .io-preloader__item .item.item--9 .head {
  transform: rotate(17deg) scale(0);
}
.io-preloader:not(.done-loading) .io-preloader__item .item.item--10 .head {
  transform: rotate(-10deg) scale(0);
}

.io-preloader.done-loading .io-preloader__text {
  visibility: visible;
}
.io-preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff2f2;
  overflow: hidden;
  user-select: none;
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px 0;
  }
  &__rainbow {
    position: relative;
    width: 300px;
    overflow: hidden;
    &::before {
      content: '';
      padding-top: 46%;
      display: block;
    }
    & video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
    & svg {
      display: block;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: auto;
    }
    & svg rect {
      fill: #fff;
    }
    & svg > rect {
      fill: #fff2f2;
      mask: url(#preloader-mask);
    }
  }
  &__text {
    margin-top: 32px;
    font-family: 'Filson Soft', sans-serif;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    color: #000;
  }
  & .io__buttons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50px);
    padding: 10px;
    text-align: center;
    overflow: hidden;
    z-index: 3;
    & .v-btn.v-btn--has-bg {
      font-family: 'Filson Soft', sans-serif;
      background: #8459ff;
      color: #fff;
      font-size: 18px;
      box-shadow: none;
      letter-spacing: -0.5px;
      font-weight: 700;
    }
  }
  &.is-animating .io__buttons .v-btn.v-btn--has-bg {
    animation: heartbeat 2s ease infinite;
  }
}
.io-preloader__items,
.io-preloader__item,
.io-preloader__item .item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.io-preloader__item {
  pointer-events: none;
  & .item {
    animation: floating-item 4s ease-in-out infinite;
  }
  & .item.item--1,
  & .item.item--5,
  & .item.item--10 {
    animation-delay: 1s;
  }
  & .item.item--1,
  & .item.item--4 {
    animation-duration: 4.6s;
  }
  & .item.item--2,
  & .item.item--5,
  & .item.item--7 {
    animation-delay: 0.6s;
  }
  & .item.item--3,
  & .item.item--6,
  & .item.item--9 {
    animation-delay: 0.5s;
  }
}
</style>
