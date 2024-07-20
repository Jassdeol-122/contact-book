<template>
  <div class="main-content">
    <router-link to="/" class="btn-back">Back</router-link>
    <ContactDetails :entry="entry" :onDelete="deleteEntry" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ContactDetails from '../components/ContactDetails.vue';

export default {
  components: {
    ContactDetails,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const entry = ref(null);

    const loadEntry = () => {
      const entries = JSON.parse(localStorage.getItem('contacts') || '[]');
      entry.value = entries.find(e => e.id === route.params.id);
    };

    const deleteEntry = (id) => {
      let entries = JSON.parse(localStorage.getItem('contacts') || '[]');
      entries = entries.filter(e => e.id !== id);
      localStorage.setItem('contacts', JSON.stringify(entries));
      router.push('/');
    };

    onMounted(loadEntry);

    return { entry, deleteEntry };
  },
};
</script>
