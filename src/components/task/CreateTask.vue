<template>
  <div class="q-pa-md">
    <q-form
      ref="formRef"
      @submit="onSubmit"
      @reset="onReset"
      class="flex row justify-center content-end q-gutter-md"
    >
      <q-input
        class="containerTextfield"
        v-model="newTask"
        label="Task"
        stack-label
        lazy-rules="ondemand"
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <div class="q-pb-lg flex content-end">
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
      <div class="q-pb-lg flex content-end">
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "stores/taskStore";

const newTask = <string>ref("");
const taskStore = useTaskStore();
const formRef = ref(null);

const onSubmit = () => {
  //console.log("ref", formRef.value);
  const isValid = formRef.value.validate();
  if (isValid) {
    console.log("submit: ", newTask);
    const task: Task = {
      id: Math.floor(Math.random() * 10000000),
      title: newTask.value,
      isFav: false,
    };
    taskStore.createNewTask(task);
    onReset();
  }
};

const onReset = () => {
  formRef.value.resetValidation();
  newTask.value = "";
  console.log("reset ", newTask);
};
</script>

<style lang="scss" scoped>
.containerTextfield {
  width: 300px;
}
</style>
