<template>
  <video autoplay :poster="poster" muted loop playsinline preload>
    <source :src="srcSource" />
  </video>
</template>

<script>
import { stringProp } from '@/helpers/props'
export default {
  props: {
    poster: stringProp(),
    srcSource: stringProp(),
  },
}
</script>
