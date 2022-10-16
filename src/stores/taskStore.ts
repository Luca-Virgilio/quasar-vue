import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'Make chocolate cake', isFav: false },
      { id: 2, title: 'Do homework', isFav: false },
    ],
  }),
  getters: {
    getFavTasks(state) {
      return state.tasks.filter((task) => task.isFav);
    },
  },
});
