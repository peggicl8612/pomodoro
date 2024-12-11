<template>
  <svg
    class="digit"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="385.688px"
    height="736.751px"
    viewBox="0 0 385.688 736.751"
    enable-background="new 0 0 385.688 736.751"
    xml:space="preserve"
  >
    <path
      :class="{ active: '02356789'.includes(data) }"
      class="digit-a"
      fill="#F8C8C9"
      d="M359.419,13c0,6.627-5.373,12-12,12H38.417c-6.627,0-12-5.373-12-12v-1c0-6.627,5.373-12,12-12h309.001
	c6.627,0,12,5.373,12,12V13z"
    />
    <path
      :class="{ active: '045689'.includes(data) }"
      class="digit-b"
      fill="#F8C8C9"
      d="M12,358c-6.627,0-12-5.373-12-12V37c0-6.627,5.373-12,12-12h1c6.627,0,12,5.373,12,12v309
	c0,6.627-5.373,12-12,12H12z"
    />
    <path
      :class="{ active: '01234789'.includes(data) }"
      class="digit-c"
      fill="#F8C8C9"
      d="M372.539,357.417c-6.627,0-12-5.373-12-12v-309c0-6.627,5.373-12,12-12h1c6.627,0,12,5.373,12,12v309
	c0,6.627-5.373,12-12,12H372.539z"
    />
    <path
      :class="{ active: '2345689'.includes(data) }"
      class="digit-d"
      fill="#F8C8C9"
      d="M359.419,368.875c0,6.628-5.373,11.999-12,11.999H38.417c-6.627,0-12-5.371-12-11.999v-1
	c0-6.627,5.373-12,12-12h309.002c6.627,0,12,5.373,12,12V368.875z"
    />
    <path
      :class="{ active: '0268'.includes(data) }"
      class="digit-e"
      fill="#F8C8C9"
      d="M12.148,713.875c-6.627,0-12-5.373-12-12v-309c0-6.627,5.373-12,12-12h1c6.627,0,12,5.373,12,12v309
	c0,6.627-5.373,12-12,12H12.148z"
    />
    <path
      :class="{ active: '013456789'.includes(data) }"
      class="digit-f"
      fill="#F8C8C9"
      d="M372.688,713.292c-6.627,0-12-5.373-12-12v-309c0-6.627,5.373-12,12-12h1c6.627,0,12,5.373,12,12v309
	c0,6.627-5.373,12-12,12H372.688z"
    />
    <path
      :class="{ active: '0235689'.includes(data) }"
      class="digit-g"
      fill="#F8C8C9"
      d="M359.567,724.751c0,6.627-5.373,12-12,12H38.565c-6.627,0-12-5.373-12-12v-1c0-6.627,5.373-12,12-12h309.002
	c6.627,0,12,5.373,12,12V724.751z"
    />
    <circle :class="{ active: data === ':' }" fill="#F8C8C9" cx="193.066" cy="190.929" r="35" />
    <circle :class="{ active: data === ':' }" fill="#F8C8C9" cx="193.066" cy="550.214" r="35" />
    />
  </svg>
</template>

<script setup>
defineProps({
  data: {
    type: String,
    default() {
      return ''
    },
  },
  color: {
    type: String,
    default() {
      return 'white'
    },
  },
})
</script>

<style scoped lang="sass">
.digit
   width: 100px
   height: 193px
   margin: 7px
path, circle
  // fill 是 SVG 的填滿
  fill: transparent
  &.active
    // v-bind 把 CSS 的值和 Vue 的變數綁定
    fill: v-bind(color)
</style>
