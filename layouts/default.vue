<template>
  <v-app id="app">
    <client-only>
      <IoPreloader v-if="showPreloader" />
    </client-only>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import IoPreloader from '@/components/Preloader/IoPreloader'

export default {
  name: 'DefaultLayout',
  components: {
    IoPreloader,
  },
  data() {
    return {
      isDone: false,
      scrollTimeout: null,
      disableScrolling: false,
      fromAnotherPage: false,
      showPreloader: false,
      isNighttime: false,
    }
  },
  computed: {
    ...mapState(['hasSeenPreloader', 'isLoadingPage']),

    isHomePage() {
      return this.$route.name === 'index'
    },
    isTouchScreen() {
      if (!process.client) return
      return (
        'ontouchstart' in window ||
        navigator.MaxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      )
    },
  },
  watch: {
    showPreloader: {
      handler(val) {
        if (!process.client) return
        const bodyEl = document.body
        val
          ? bodyEl.classList.add('hide-scroller')
          : bodyEl.classList.remove('hide-scroller')
      },
      immediate: true,
    },
    isTouchScreen: {
      handler(val) {
        if (!process.client) return
        const bodyEl = document.body
        if (val) {
          bodyEl.classList.add('is-touch-screen')
        } else {
          bodyEl.classList.remove('is-touch-screen')
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.showPreloader = this.isHomePage && !this.hasSeenPreloader
    this.onPageLoadEvent()
  },
  methods: {
    ...mapMutations(['hideLoadingPage']),

    onPageLoadEvent() {
      const $this = this
      setTimeout(() => {
        $this.hideLoadingPage()
      }, 100)
    },
  },
}
</script>
