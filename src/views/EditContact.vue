<template>
  <div class="main-content">
    <router-link to="/" class="btn-back">Back</router-link>
    <ContactForm :entry="entry" :onSave="saveEntry" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ContactForm from '../components/ContactForm.vue';

export default {
  components: {
    ContactForm,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const entry = ref({ firstName: '', lastName: '', email: '', phone: '' });

    const loadEntry = () => {
      if (route.params.id) {
        const entries = JSON.parse(localStorage.getItem('contacts') || '[]');
        entry.value = entries.find(e => e.id === route.params.id);
      }
    };

    const saveEntry = (entry) => {
      let entries = JSON.parse(localStorage.getItem('contacts') || '[]');

      if (entry.id) {
        const index = entries.findIndex(e => e.id === entry.id);
        entries[index] = entry;
      } else {
        entry.id = Date.now().toString();
        entries.push(entry);
      }

      localStorage.setItem('contacts', JSON.stringify(entries));
      router.push(`/contact/${entry.id}`);
    };

    onMounted(loadEntry);

    return { entry, saveEntry };
  },
};
</script>
