<template>
  <div v-if="entry" class="details-card">
    <h2>{{ entry.firstName }} {{ entry.lastName }}</h2>
    <p>Email: {{ entry.email }}</p>
    <p>Phone: {{ entry.phone }}</p>
    <div class="actions">
      <router-link :to="{ name: 'EditContact', params: { id: entry.id } }">
        <button class="btn-edit">Edit</button>
      </router-link>
      <button @click="handleDelete" class="btn-delete">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    entry: Object,
    onDelete: Function,
  },
  methods: {
    handleDelete() {
      this.onDelete(this.entry.id);
    },
  },
};
</script>
