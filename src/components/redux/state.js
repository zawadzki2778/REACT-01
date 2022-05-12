let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likeCount: 5},
            {id: 2, message: 'Hi! How are you?', likeCount: 17},
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Максим' },
            { id: 2, name: 'Вита' },
            { id: 3, name: 'Женя' },
            { id: 4, name: 'Саша' },
            { id: 5, name: 'Жулик' },
            { id: 6, name: 'Реакт' },
        ],
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'How is your react learning?' },
            { id: 3, message: 'Yo, its supper!' },
            { id: 4, message: 'Realy greate' },
            { id: 5, message: 'Ho ho ho' },
            { id: 6, message: 'My way of the Samurai' },
        ],
    },
    sidebar: {},
};

export let addPost = (postMessage) => {
    let newPost = {
        ad: 3,
        message: postMessage,
        likeCount: 29
    };
    state.profilePage.posts.push(newPost);
};
export default state;