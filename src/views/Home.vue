<template>
  <div class="home">
    <q-btn color="primary" label="Dialog with component" @click="openIt" />
    <q-btn label="Dialog with setting" color="primary" @click="alert" />
    <h1>003</h1>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import DialogComponentVue from '@/components/DialogComponent.vue'

const $q = useQuasar()

function openIt() {
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
