<template>
  <div>
    <HeaderComponent />

    <main>
      <router-view/>
    </main>
  </div>
</template>

<script setup>
  import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<style scoped>
  main {
    padding-top: 60px;
  }
</style>
