import { REQUEST_POSTS } from '../../constant'

function home(state = 'home', action) {
    switch (action.type) {
        case REQUEST_POSTS:
            console.log(action.payload)
            return state
        default:
            return state
    }
}

export default home
