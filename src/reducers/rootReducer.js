const initState = {
    posts: [
        {id: 1, title: 'Potato', body: 'Brown & Bland'},
        {id: 2, title: 'Banana', body: 'Yellow & Sweet'},
        {id: 3, title: 'Tomato', body: 'Red & Citrus'},
    ]
}

const rootReducer = (state = initState, action) => {
    // console.log(action)
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => action.id !== post.id);
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;