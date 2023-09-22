<template>
  <kinesis-element class="io-preloader__item" :strength="-20">
    <div :class="`item item--${ball.id}`">
      <div :class="`ball__container draggable--ball-${ball.name}`">
        <img
          :src="ball.img"
          :alt="`ball-${ball.name}`"
          :class="`ball ball--${ball.name}`"
        />
      </div>
    </div>
  </kinesis-element>
</template>

<script>
import { objectProp } from '@/helpers/props'

export default {
  props: {
    ball: objectProp(),
  },
}
</script>

<style lang="scss">
.io-preloader__item .item {
  & .ball__container {
    position: absolute;
  }

  & .ball {
    position: relative;
    transition: transform 0.3s cubic-bezier(0, -0.02, 0, 1);
    user-select: none;
  }

  & .draggable--ball-green {
    top: 40px;
    left: 50px;
  }
  & .ball--green {
    width: 220px;
    transition-delay: 0.65s;
    filter: blur(2px);
  }

  & .draggable--ball-pink {
    top: 170px;
    right: 25px;
  }
  & .ball--pink {
    width: 240px;
    transition-delay: 0.35s;
  }

  & .draggable--ball-blue {
    top: -100px;
    right: calc(50% - 115px);
  }
  & .ball--blue {
    width: 235px;
    filter: blur(5px);
  }

  & .draggable--ball-beige {
    bottom: -100px;
    left: -50px;
  }
  & .ball--beige {
    width: 300px;
    transition-delay: 0.25s;
    filter: blur(5px);
  }

  & .draggable--ball-yellow {
    bottom: 50px;
    left: 50%;
  }
  & .ball--yellow {
    width: 150px;
    filter: blur(1px);
  }

  & .draggable--ball-purple {
    bottom: -170px;
    right: -150px;
  }
  & .ball--purple {
    width: 400px;
    filter: blur(5px);
  }
}
</style>
