<script setup lang="ts">
import WatchEffect from './components/WatchEffect.vue'
import WatchSimpleRef from './components/WatchSimpleRef.vue'
import WatchComplicatedRef from './components/WatchComplicatedRef.vue'
import WatchReactive from './components/WatchReactive.vue'
import WatchSingleAttr from './components/WatchSingleAttr.vue'
</script>

<template>
  <WatchEffect></WatchEffect>
  <hr />
  <WatchSimpleRef></WatchSimpleRef>
  <hr />
  <WatchComplicatedRef></WatchComplicatedRef>
  <hr />
  <WatchReactive></WatchReactive>
  <hr />
  <WatchSingleAttr></WatchSingleAttr>
</template>
