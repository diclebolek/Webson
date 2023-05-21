new Vue({
    el: '#app',
    data: {
      firstName: '',
      lastName: '',
      phone: '',
      gender: '',
      message: '',
      email: '',
      city: '',
      formValid: true
    },
    methods: {
      submitForm() {
        if (this.formValid) {
          console.log('Form submitted!');
        } else {
          console.log('Form is not valid. Please fill in all the required fields.');
        }
      },
      resetForm() {
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
        this.gender = '';
        this.message = '';
        this.email = '';
        this.city = '';
        this.formValid = false;
      },
      validateForm() {
        if (
          this.firstName &&
          this.lastName &&
          this.phone &&
          this.gender &&
          this.message &&
          this.email &&
          this.city !== 'yok'
        ) {
          this.formValid = true;
        } else {
          this.formValid = false;
        }
      }
    }
  });