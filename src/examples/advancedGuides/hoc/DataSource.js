import {EventEmitter} from "./EventEmitter";

export const DataSource = {
    comments: [
        {
            author: 'anonymous',
            dateTime: '20.09.2020 12:01',
            comment: 'lol'
        },
        {
            author: 'Anonymous pepa',
            dateTime: '20.09.2020 13:01',
            comment: 'funny'
        },
        {
            author: 'Smart calibre',
            dateTime: '20.09.2020 15:03',
            comment: 'write again'
        },
    ],
    posts: [{
        title: "Post 0",
        description: "Description",
        article: "To imagine TL;TR article about kitty and clouds"
    },
        {
            title: "Post 1",
            description: "Description",
            article: "To imagine TL;TR article about kitty and clouds"
        }
    ],
    getComments() {
        return this.comments;
    },
    getPost(id) {
        return this.posts[id];
    },
    addChangeListener(callback) {
        EventEmitter.subscribe('change', callback);
    },
    removeChangeListener(callback) {
        EventEmitter.unsubscribe('change', callback);
    }
}