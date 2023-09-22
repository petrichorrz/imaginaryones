<template>
  <kinesis-element class="io-preloader__item" :strength="-30">
    <div :class="`item item--${id}`">
      <transition name="bounce">
        <picture class="draggable" @click.stop="handleClickHead(head)">
          <img
            :src="require(`@/assets/img/${head}.png`)"
            :alt="`head-${head}`"
            class="head"
          />
        </picture>
      </transition>
    </div>
  </kinesis-element>
</template>

<script>
import interact from 'interactjs'
import { Howl } from 'howler'
import { arrayProp, stringProp, numberProp } from '@/helpers/props'
import { HEADS } from '@/assets/constants'

export default {
  props: {
    head: stringProp(),
    id: numberProp(),
    heads: arrayProp(),
  },
  data() {
    return {
      nameHead: '',
      sfxs: {
        switch: {
          src: '/audio/sfx-head.mp3',
          howl: null,
          extraVolume: 0,
        },
      },
    }
  },
  computed: {
    isTouchScreen() {
      return (
        'ontouchstart' in window ||
        navigator.MaxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      )
    },
  },
  created() {
    this.nameHead = this.head
  },
  mounted() {
    const draggable = document.querySelector(`.item--${this.id} .draggable`)
    this.generateDraggableHeads(draggable)
    this.generateSfx()
  },
  methods: {
    generateSfx() {
      const e = this
      Object.keys(this.sfxs).forEach(function (item) {
        const howl = new Howl({
          src: [e.sfxs[item].src],
          autoplay: false,
          loop: false,
          volume: e.sfxVolume,
        })
        e.sfxs[item].howl = howl
      })
    },
    handleClickHead(name) {
      const isDragging = document.querySelector('.is-dragging')
      if (isDragging) return
      this.sfxs.switch.howl.play()
      this.nameHead = ''
      const newHeads = HEADS.filter((item) => !this.heads.includes(item))
      const random = newHeads[Math.floor(Math.random() * newHeads.length)]
      const headsList = this.heads.map((item) =>
        item === name ? random : item
      )
      setTimeout(() => {
        this.nameHead = random
      }, 100)
      this.$emit('updateHeads', headsList)
    },
    generateDraggableHeads: function (selector) {
      interact(selector).draggable({
        inertia: {
          resistance: 2,
        },
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
        ],
        autoScroll: true,
        listeners: {
          start(event) {
            event.target.classList.add('is-dragging')
          },
          move: this.dragMoveListener,
          end(e) {
            let timer = 0
            clearTimeout(timer)
            timer = setTimeout(function () {
              e.target.classList.remove('is-dragging')
              clearTimeout(timer)
            }, 100)
          },
        },
      })
    },
    dragMoveListener: function (e) {
      if (!this.isTouchScreen) {
        const target = e.target
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.io-preloader__item {
  & .draggable {
    position: absolute;
    cursor: pointer;
    pointer-events: auto;
  }
  & .head {
    position: relative;
    transition: transform 0.3s cubic-bezier(0, -0.02, 0, 1);
  }
  & .item--7 .draggable {
    left: 20%;
    top: 17%;
    & .head {
      width: 300px;
      transform: rotate(17deg) scale(1);
    }
  }

  & .item--8 .draggable {
    left: 10%;
    bottom: 3%;
    & .head {
      width: 375px;
      transform: rotate(-5deg) scale(1);
      transition-delay: 0.4s;
    }
  }

  & .item--9 .draggable {
    right: 25%;
    top: 11%;
    & .head {
      width: 225px;
      transform: rotate(17deg) scale(1);
      transition-delay: 0.25s;
    }
  }

  & .item--10 .draggable {
    right: 7%;
    bottom: 22%;
    & .head {
      width: 305px;
      transform: rotate(-10deg) scale(1);
      transition-delay: 0.5s;
    }
  }
}
</style>
