export const state = () => ({
  isLoadingPage: true,
  isEntering: false,
  hasSeenPreloader: false,
  reducedMotion: false,
  isMuted: false,
  roadMapCategory: '',
  hasShowHeadInstruction: false,
  isNighttime: false,
})

export const mutations = {
  turnOnReducedMotion: (state) => {
    state.reducedMotion = true
    this.$cookie.set('reduce-motion', true)
  },
  turnOffReducedMotion: (state) => {
    state.reducedMotion = false
    this.$cookie.set('reduce-motion', false)
  },
  muteAudio: (state) => {
    state.isMuted = true
    this.$cookie.set('muted', true)
  },
  unmuteAudio: (state) => {
    state.isMuted = false
    this.$cookie.set('muted', false)
  },
  hideLoadingPage: (state) => {
    state.isLoadingPage = false
  },
  setRoadMapCategory: (state, payload) => {
    state.roadMapCategory = payload
  },
  enterPage: (state) => {
    state.isEntering = true
    state.hasSeenPreloader = true
  },
  showHeadInstruction: (state) => {
    state.hasShowHeadInstruction = true
  },
  setIsNighttime: (state, payload) => {
    state.isNighttime = payload
  },
}
