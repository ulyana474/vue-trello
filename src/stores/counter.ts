import { defineStore } from 'pinia'

export const useTaskStore = defineStore("counter", {
  state: () => {
    if (localStorage.getItem("counter"))
      return JSON.parse(localStorage.getItem("counter"));
    return {
      count: 0,
    };
  },
  actions: {
    increment(value = 1) {
      this.count += value;
      alert("incremented")
    },
    decrement(value = 1) {
      this.count -= value;
    },
    reset() {
      this.count = 0;
    }
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
    squareCount: (state) => {
      return state.count ** 2;
    },
  },
});
