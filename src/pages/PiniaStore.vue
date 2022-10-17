<template>
  <q-page>
    <div class="flex column full-width justify-center content-center bg-light-green-1">
      <h3 class="text-weight-medium">Pinia store</h3>
      <CreateTask></CreateTask>
    </div>
    <div class="flex full-width">
      <TaskList></TaskList>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import TaskList from "components/task/TaskList.vue";
import CreateTask from "components/task/CreateTask.vue";
</script>
