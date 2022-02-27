<template>
  <div class="home">
    <h1>Dialog-Plugin</h1>
    <q-btn color="primary" label="Dialog with component" @click="openComponent" />

    <q-btn label="Dialog " color="primary" @click="alert" class="q-ma-md" />
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import DialogComponentVue from '@/components/DialogComponent.vue'

const $q = useQuasar()

function openComponent() {
  $q.dialog({
    component: DialogComponentVue,
  })
    .onOk(() => {
      console.log('OK')
    })
    .onCancel(() => {
      console.log('Cancel')
    })
    .onDismiss(() => {
      console.log('Called on OK or Cancel')
    })
}

function alert() {
  $q.dialog({
    title: 'Alert',
    message: 'Some message',
  })
    .onOk(() => {
      // console.log('OK')
    })
    .onCancel(() => {
      // console.log('Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    })
}
</script>
