let renderEntireTree = () => {
    console.log('smthng')
}

let state = {

    profilePage: {

        PostsData: [
            {id:1, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', dscr: 'Вы все ГОВНО'},
            {id:2, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', dscr: 'Ты то хуесосина куда лезешь?'},
            {id:3, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', dscr: 'Платформа ПК - это кусок говна'},
            {id:4, img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', dscr: 'Да у меня RTX. И ЧО?'},
        ],

        NewPost: [
            {text: 'you motherfucker'}
        ]

    },

    messegesPage: {

        MessegesData: [
            {id:1, username: 'Anya', lastmessege: '15.1.2024' },
            {id:2, username: 'Sonya', lastmessege: '11.1.2024' },
            {id:3, username: 'Violetta', lastmessege: '13.1.2024' },
            {id:4, username: 'Nastya', lastmessege: '12.1.2024' },
        ],

        MessegesinData: [
            {text: 'Hello'},
            {text: 'How are you?'},
            {text: 'Fuck you asshole'},
        ],
        
    },

    friendsPage: {

        FriendsData: [
            {id:1, useravatar: 'https://virtus-img.cdnvideo.ru/images/quote-author/plain/19/197b6b3e81310f34eb61f70d60220492.png@jpg', username: 'Антон Логвинов', userabout: 'doesnt have any info'},
            {id:2, useravatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101693/4078d528153b49bbb0f1eb678d28ba20/960x540', username: 'Киану Ривз', userabout: 'doesnt have any info'},
            {id:3, useravatar: 'https://sun9-78.userapi.com/s/v1/ig2/UtrRm-r9sRGdfocQyMWLaebXdqvcMvRycM9RqoU16Xka0FQ3doXdjhidCA203Gqhg7WEhbY6n-cO58u4wWvqGzP0.jpg?size=200x200&quality=96&crop=0,0,545,545&ava=1', username: 'Виталий Казунов', userabout: 'doesnt have any info'},
            {id:4, useravatar: 'https://amurlim.ru/wp-content/uploads/2021/12/shkredov-mihail.jpg', username: 'Михаил Шкредов', userabout: 'doesnt have any info'},
            {id:5, useravatar: 'https://play-lh.googleusercontent.com/460zz6qZ8PmIYrWKQBWhPe20FBCyUNKAsz3fakV-Ol0Zs3j1ImoR_3oYDe3BSZS2Xw', username: 'Соня Евгеньевна', userabout: 'doesnt have any info'},
            {id:6, useravatar: 'https://i.pinimg.com/564x/ec/51/ee/ec51ee1ec66cf6ead8aa6620ad5e8716.jpg', username: 'Виолетта Дмитриевна', userabout: 'doesnt have any info'},
            {id:7, useravatar: 'https://i.redd.it/chsyk2setbg41.jpg', username: 'Екатерина Владимирована', userabout: 'doesnt have any info'},
            {id:8, useravatar: 'https://posterspy.com/wp-content/uploads/2019/08/Homelander-Portrait-Smaller.jpg', username: 'Homelander', userabout: 'lorem imptum huipsum'},
        ],

    },
}

export let UpdateNewPost = (UpdateText) => {
    state.profilePage.NewPost[0].text = UpdateText;
    renderEntireTree();
}

export let AddPost = () => {
    let NewPost = {
        id:0, 
        img: 'https://vgtimes.ru/uploads/tags_images/anton-logvinov-5476.jpg', 
        dscr: state.profilePage.NewPost[0].text,
    };
    state.profilePage.PostsData.push(NewPost);
    state.profilePage.NewPost[0].text = 'Введите текст'
    renderEntireTree();
};

export let AddMessege = (text) => {
    let NewMessege = {text: text}
    state.messegesPage.MessegesinData.push(NewMessege)
    renderEntireTree();
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;

  

  
