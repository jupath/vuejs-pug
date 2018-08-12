<template lang="pug">
  div
    form(@submit.prevent="handleSaveUser")
      .form-group(:class="{error: $v.user.name.$error && !$v.user.name.required}")
        label Name *
        input#form-name.form-control(type="text" aria-describedby="name" placeholder="Enter your name" v-model.trim="$v.user.name.$model")
        .error(v-if="$v.user.name.$error && !$v.user.name.required") Field is required
      .form-group(:class="{error: $v.user.email.$error && !$v.user.email.required || !$v.user.email.email}")
        label Email *
        input#form-email.form-control(type="email" aria-describedby="email" placeholder="Enter your email" v-model.trim="$v.user.email.$model")
        .error(v-if="!$v.user.email.email") Please provide a valid email address
        .error(v-if="$v.user.email.$error && !$v.user.email.required") Field is required
      .form-group(:class="{error: !$v.user.age.minValue}")
        label Age
        input#form-age.form-control(type="number" aria-describedby="age" placeholder="Enter your age" v-model.trim="$v.user.age.$model")
        .error(v-if="!$v.user.age.minValue") You must be at least {{ $v.user.age.$params.minValue.min }} years old
      .py-2
        label.pr-2 Your gender:
        .form-check.form-check-inline
          input.form-check-input(type="radio" id="gender1" name="gender" value="male" v-model="user.gender")
          label.form-check-label(for="gender1") male
        .form-check.form-check-inline
          input.form-check-input(type="radio" id="gender2" name="gender" value="female" v-model="user.gender")
          label.form-check-label(for="gender2") female
      .py-2
        label.pr-2 Choose services:
        .form-check.form-check-inline
          input.form-check-input(type="checkbox" id="service-mobile" value="mobile" v-model="user.services")
          label.form-check-label(for="service-mobile") mobile
        .form-check.form-check-inline
          input.form-check-input(type="checkbox" id="service-internet" value="internet" v-model="user.services")
          label.form-check-label(for="service-internet") internet
        .form-check.form-check-inline
          input.form-check-input(type="checkbox" id="service-tv" value="tv" v-model="user.services")
          label.form-check-label(for="service-tv") TV
      .form-group(:class="{error: !$v.user.country.required}")
        label(for="country") Select your country
        select#country.form-control(v-model="$v.user.country.$model")
          option(v-for="(country, index) in countries" :key="index" :value="country") {{ country }}
        .error(v-if="!$v.user.country.required") If you pick services country is required
      .success.my-3.p-2(v-if="success") The form has been successfully saved!
      .text-center.py-3
        button.btn.btn-success Save user
</template>

<script>
import shortid from 'shortid';
import { email, required, minValue, requiredIf } from 'vuelidate/lib/validators';
import formMixin from '../mixins/form';

export default {
  mixins: [formMixin],
  data() {
    return {
      countries: ['Germany', 'Hungary', 'Italy', 'Spain', 'UK', 'USA'],
      user: {
        name: '',
        email: '',
        age: '',
        gender: '',
        country: '',
        services: []
      },
      success: false
    }
  },
  validations: {
    user: {
      name: {
        required
      },
      email: {
        required,
        email,
      },
      age: {
        minValue: minValue(18)
      },
      country: {
        required: requiredIf(vm => {
          return vm.services.length > 0;
        })
      }
    }
  },
  methods: {
    handleSaveUser() {
      this.$v.$touch();

      if(!this.$v.$invalid) {
        this.$emit('handleSaveUser', {
          id: shortid.generate(),
          ...this.user
        })
        this.success = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/helpers/_variables.scss';
.form-group {
  margin-bottom: 0.5rem;
}

label {
  margin-bottom: 0;
}

.error {
  color: $red;
  font-weight: bold;
  input {
    border: 1px solid $red;
    background: rgba($red, 0.2);
  }
}

.success {
  border: 2px solid $green;
  color: $green;
  font-weight: bold;
}
</style>

