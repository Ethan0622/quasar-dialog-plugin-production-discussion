<template>
  <q-layout view="hhh lpR fff" class="bg-color">
    <q-header class="text-center bg-navBar">
      <q-toolbar>
        <q-toolbar-title>Header</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-center bg-navBar">
      <q-separator />
      <div class="q-py-md">Footer</div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.toolbar {
  max-width: 1280px;
  .tabs .q-tab__content {
    min-width: 0;
  }
}
.bg-color {
  background-color: #f8f9fa;
}

.bg-navBar {
  color: gray;
}
</style>
