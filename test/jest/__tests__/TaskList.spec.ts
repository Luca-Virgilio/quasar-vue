import { describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { mount } from '@vue/test-utils';
import TaskList from 'components/task/TaskList.vue';
import { createTestingPinia } from '@pinia/testing';
import { useTaskStore } from 'stores/taskStore';
// Specify here Quasar config you'll need to test your component
installQuasarPlugin();

describe('Test taskList components', () => {
  it('Has list of task', () => {
    const wrapper = mount(TaskList, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const store = useTaskStore();

    const { vm } = wrapper;
    expect(store.tasks.length).toBe(2);
    expect(typeof vm.listType).toBe('string');
    expect(vm.listType).toBe('all');
  });
});
