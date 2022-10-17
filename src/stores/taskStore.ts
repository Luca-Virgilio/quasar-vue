import { defineStore } from 'pinia';
import { Task } from 'src/components/models';

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
  actions: {
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id != id);
    },
    changeTaskFav(id: number) {
      const task: Task | undefined = this.tasks.find((task) => task.id == id);
      if (task != undefined) {
        task.isFav = !task.isFav;
      }
    },
    createNewTask(task: Task) {
      this.tasks.push(task);
    },
  },
});
