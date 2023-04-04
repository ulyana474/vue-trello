import { defineStore } from 'pinia'

export const useTaskStore = defineStore("task", {
  state: () : any => {
    if (localStorage.getItem("task_list"))
      return localStorage.getItem("task_list");
    return {
      task_list: []
    }
  },
  actions: {
    store_task(task_list: []) {
      localStorage.setItem("task_list", JSON.stringify(task_list));
    },
    retrieve_task(): any {
      if (localStorage.getItem("task_list") != null) {
        const task_list = JSON.parse(localStorage.getItem("task_list"));
        return task_list
      }
      return []
    }
  },
});
