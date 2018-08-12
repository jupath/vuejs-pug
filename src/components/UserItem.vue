<template lang="pug">
  .col-sm-6.col-md-4.mb-4
    .user-wrapper.p-3
      .user__header.pb-3
        h4 {{ user.name | capitalize }}
        span(@click="handleDelete") &#10006;
      p Email: {{ user.email }}
      p Age: {{ user.age }}
      p Gender: {{ user.gender }}
      p Country: {{ user.country }}
      p Services: {{ listServices }}
</template>

<script>
export default {
  props: {
    user: Object
  },
  methods: {
    handleDelete() {
      this.$emit('handleDelete', this.user.id);
    }
  },
  computed: {
    listServices() {
      return this.user.services.join(', ');
    }
  }
}
</script>

<style lang="scss" scoped>
.user-wrapper {
  background-color: white;
  border: 1px solid #eee;
  box-shadow: 0 10px 15px -2px #eee;
}

h4 {
  margin-bottom: 0;
}

.user__header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  span:hover {
    cursor: pointer;
  }
}

p {
  margin: 0;
}
</style>
