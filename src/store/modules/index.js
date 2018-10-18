const state = {
    swiper: [],
    list: []
}

const mutations = {
    updateList(state, payload) {
        console.log('payload...', payload);
        state.list = payload.goods_list;
    },
    updateSwiper(state, payload) {
        console.log('payload...', payload);
        state.swiper = payload.result;
    }
}

const actions = {
    getIndex({ commit }) {
        fetch('/api/v5/goods?pdduid=3872656134&xcx=20161201&xcx_version=v2.2.7.1&column=2&list_id=xcx_index_goods_eD3ndQ&page=1&size=40&platform=5&anti_content=3aceJxjZAACfwYmxkQgTgLiZCBOAeJUBkXGNDlDUwszQzNLS0MDcxNDC3MLXUNTY3MjcyNTIyNzSwMGLsZ0dgbG1DdTNdQYWBkzmBgZGJgZMxkA6RAMow%253D%253D')
            .then(res => res.json())
            .then(body => {
                commit('updateList', body);
            })
    },
    getSwiper({ commit }) {
        fetch('/api/api/fiora/bannerindex/query/platform?pdduid=1396321830&xcx=20161201&xcx_version=v2.3.2&platform=5&version=2&anti_content=3aceJwNw8sJgEAMBcCXFRHsQfAoiJDNfm3CHvytWrddeDIDQ1ALDK1607s%252B9ImeSpc8M8csgePsvZ1scFmSSJScHVq6GlAZxu9FTbchoKIHP9nkDL4%253D')
            .then(res => res.json())
            .then(body => {
                commit('updateSwiper', body);
            })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}