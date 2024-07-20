<template>
  <div class="list-container">
    <div class="search-bar">
      <input v-model="searchTerm" placeholder="Search contacts" />
      <router-link to="/add" class="btn-add">Add Contact</router-link>
    </div>
    <ol class="contact-list">
      <li class="contact-card" v-for="entry in filteredEntries" :key="entry.id">
        <router-link :to="{ name: 'ViewContact', params: { id: entry.id } }">
          <h2>{{ entry.firstName }} {{ entry.lastName }}</h2>
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    entries: Array,
  },
  data() {
    return {
      searchTerm: '',
    };
  },
  computed: {
    filteredEntries() {
      return this.entries
        .filter(entry =>
          `${entry.firstName} ${entry.lastName}`
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
  },
};
</script>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.search-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-bar input {
  padding: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-add {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  text-decoration: none;
}

.btn-add:hover {
  background-color: #0056b3;
}

.contact-list {
  list-style-type: decimal;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-card {
  background: #e0f7fa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background-color 0.2s;
}

.contact-card:hover {
  background-color: #b2ebf2;
  transform: scale(1.02);
}

.contact-card h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #00796b;
}
</style>
