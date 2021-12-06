export const state = () => ({
  id: 1,
  all: [],
});

export const actions = {
  async getPosts({ commit, state }) {
    const response = await this.$axios.$get(`http://localhost:3001/posts`);
    commit("setPosts", response);
  },
};

export const mutations = {
  setPosts(state, posts) {
    state.all = posts;
  },
};
