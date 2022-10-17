<template>
  <div class="full-width column content-center q-pa-md">
    <div class="q-mb-md">
      <q-btn-group rounded>
        <q-btn
          rounded
          :color="chooseClass(listType === 'all', 'green-5', 'grey-5')"
          label="all"
          @click="listType = 'all'"
        />
        <q-btn
          rounded
          :color="chooseClass(listType === 'fav', 'green-5', 'grey-5')"
          label="Favourite"
          @click="listType = 'fav'"
        />
      </q-btn-group>
    </div>

    <q-list class="containerList" bordered separator v-ripple v-if="getList.length > 0">
      <q-item clickable v-for="(task, index) in getList" :key="index">
        <q-item-section>{{ task.title }}</q-item-section>
        <q-item-section avatar>
          <q-btn
            flat
            round
            :color="'grey-5'"
            icon="delete"
            @click="taskStore.deleteTask(task.id)"
          />
        </q-item-section>
        <q-item-section avatar>
          <q-btn
            flat
            round
            :color="chooseClass(task.isFav, 'red-5', 'grey-5')"
            icon="favorite"
            @click="taskStore.changeTaskFav(task.id)"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-else class="containerList q-mb-md"><p>No task</p></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useTaskStore } from "stores/taskStore";

const taskStore = useTaskStore();
const listType = ref<string>("all");

const getList = computed(() => {
  if (listType.value === "fav") {
    return taskStore.getFavTasks;
  } else {
    return taskStore.tasks;
  }
});

const chooseClass = (condition: bool, class1: string, class2: string) => {
  return condition ? class1 : class2;
};
</script>
<style scoped>
.containerList {
  width: 50%;
  min-width: 200px;
}
</style>
