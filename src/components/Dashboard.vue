<template lang="pug">
  .dashboard
    .text-center.text-sm-right.py-4
      button.btn.btn-success(@click="showModal = true") Add new user
    .row.py-4
      app-user-item(v-for="(user, index) in users" :key="index" :user="user" @handleDelete="handleDelete")
    app-modal(v-if="showModal")
      .model-header__content(slot="header")
        h5.modal-title Add new user
        span(@click="showModal = false") &#10006;
      app-user-form(slot="body" @handleSaveUser="addNewUser")
</template>

<script>
import axios from 'axios';
import UserItem from './UserItem';
import Modal from './Modal';
import UserForm from './UserForm';
export default {
  data() {
    return {
      users: [],
      showModal: false,
    }
  },
  methods: {
    fetchInitialUsers() {
      axios.get('https://randomuser.me/api/?results=3&nat=us')
        .then(res => {
          const results = res.data.results;
          this.users = results.map(user => {
            return {
              id: user.id.value,
              name: `${user.name.first} ${user.name.last}`,
              email: user.email,
              age: user.dob.age,
              gender: user.gender,
              country: user.nat,
              services: ['mobile', 'internet']
            }
          });
        })
    },
    addNewUser(user) {
      this.users.unshift(user);
    },
    handleDelete(id) {
      this.users = this.users.filter(user => user.id !== id);
    }
  },
  created() {
    this.fetchInitialUsers();
  },
  components: {
    appUserItem: UserItem,
    appModal: Modal,
    appUserForm: UserForm,
  }
}
</script>

<style lang="scss" scoped>
.model-header__content {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  span:hover {
    cursor: pointer;
  }
}
</style>
