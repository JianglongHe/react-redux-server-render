import { REQUEST_POSTS } from '../../constant'
const homeData = {
    name: ''
}

export default function home(state = {}, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            console.log(action.payload)
            const data = Object.assign(homeData, { name: action.payload })
            console.log(data)
            return Object.assign(state, data)
        default:
            return state
    }
}
