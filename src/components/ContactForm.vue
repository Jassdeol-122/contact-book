<template>
  <form @submit.prevent="handleSubmit" class="form-container">
    <div class="form-field">
      <label for="firstName">First Name:</label>
      <input type="text" v-model="entry.firstName" required />
    </div>
    <div class="form-field">
      <label for="lastName">Last Name:</label>
      <input type="text" v-model="entry.lastName" required />
    </div>
    <div class="form-field">
      <label for="email">Email:</label>
      <input type="email" v-model="entry.email" required />
    </div>
    <div class="form-field">
      <label for="phone">Phone Number:</label>
      <input type="tel" v-model="entry.phone" required />
    </div>
    <button type="submit" class="btn-save">Save</button>
  </form>
</template>

<script>
export default {
  props: {
    entry: Object,
    onSave: Function,
  },
  methods: {
    handleSubmit() {
      this.onSave(this.entry);
    },
  },
};
</script>

<style scoped>
.form-container {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-field label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #4caf50;
}

.form-field input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-save {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
}

.btn-save:hover {
  background-color: #45a049;
}
</style>
