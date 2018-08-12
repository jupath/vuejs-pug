<template lang="pug">
  header.header.text-center
    .header__title.py-3
      img.header__logo(src="../assets/logo.svg" alt="VueJS")
      h1.title {{ title }}
</template>

<script>
export default {
  data() {
    return {
      title: 'Simple VueJS project with PUG',
    }
  }
}
</script>

<style lang="scss" scoped>
.header__logo {
  height: 60px;
  width: auto;
}

.header__title {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
