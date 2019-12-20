import { asyncGetProducts } from '~/common/api'

export const state = () => []

export const mutation = {
    gotProducts(state, payload) {
        state = payload
    }
}

export const actions = {
    async fetchProduct(context) {
        const products = await asyncGetProducts()
        context.commit('gotProducts', products)
    }
}