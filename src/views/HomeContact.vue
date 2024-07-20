<template>
  <div class="main-content">
    <h1 class="center-heading">Contact List</h1>
    <ContactList :entries="entries" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ContactList from '../components/ContactList.vue';

export default {
  components: {
    ContactList,
  },
  setup() {
    const entries = ref([]);

    const loadEntries = () => {
      const storedEntries = JSON.parse(localStorage.getItem('contacts') || '[]');
      entries.value = storedEntries;
    };

    onMounted(loadEntries);

    return { entries };
  },
};
</script>

<style scoped>
.main-content {
  padding: 20px;
}

.center-heading {
  text-align: center;
  color: #4caf50;
}
</style>
