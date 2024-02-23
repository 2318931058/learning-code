<script setup lang="ts">
import shallowRef from './components/shallowRef.vue';
import shallowReactive from './components/shallowReactive.vue';
import readonlyAttr from './components/readonlyAttr.vue';
import shallowReadonly from './components/shallowReadonly.vue';
import toRawAttr from './components/toRawAttr.vue';
import markRawAttr from './components/markRawAttr.vue';
import customRefAttr from './components/customRefAttr.vue';

</script>

<template>
  <div>
    <shallowRef />
    <hr />

    <shallowReactive />
    <hr />

    <readonlyAttr />
    <hr />

    <shallowReadonly />
    <hr />

    <toRawAttr />
    <hr />

    <markRawAttr />
    <hr />

    <customRefAttr />
    <hr />
  </div>
</template>


