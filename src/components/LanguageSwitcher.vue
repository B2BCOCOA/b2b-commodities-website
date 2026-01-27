<template>
  <div class="language-switcher">
    <select v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="pl">Polski</option>
      <option value="de">Deutsch</option>
    </select>
  </div>
</template>

<style scoped>
.language-switcher select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: transparent;
  color: inherit;
}
</style>
