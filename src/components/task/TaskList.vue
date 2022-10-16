<template>
  <div class="col-grow q-pa-md">
    <q-btn-group class="q-mb-md" rounded>
      <q-btn
        rounded
        :color="listType === 'all' ? 'green-5' : 'grey-5'"
        label="all"
        @click="listType = 'all'"
      />
      <q-btn
        rounded
        :color="listType === 'fav' ? 'green-5' : 'grey-5'"
        label="Favourite"
        @click="listType = 'fav'"
      />
    </q-btn-group>
    <q-list
      style="max-width: 550px"
      bordered
      separator
      v-ripple
      v-if="getList.length > 0"
    >
      <q-item clickable v-for="(task, index) in getList" :key="index">
        <q-item-section>{{ task.title }}</q-item-section>
        <q-item-section avatar>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-else class="q-mb-md"><p>No task</p></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useTaskStore } from "stores/taskStore";

const taskStore = useTaskStore();
const listType = ref("all");

const getList = computed(() => {
  if (listType.value === "fav") {
    return taskStore.getFavTasks;
  } else {
    return taskStore.tasks;
  }
});
</script>
