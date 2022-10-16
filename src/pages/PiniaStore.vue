<template>
  <q-page>
    <div class="flex full-width justify-center align-center bg-light-green-1">
      <h3 class="text-weight-medium">Pinia store</h3>
    </div>
    <div class="flex full-width">
      <TaskList></TaskList>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import TaskList from "components/task/TaskList.vue";
</script>
