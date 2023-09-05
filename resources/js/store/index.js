import { createStore } from "vuex";

export default createStore({
    state: {
        count: 0,
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
    },
    actions: {
        incrementAsync(context) {
            setTimeout(() => {
                context.commit("increment");
            }, 1000);
        },
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        },
    },
    modules: {},
});
