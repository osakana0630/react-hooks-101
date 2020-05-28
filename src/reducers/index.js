const events = (state = [], action) => {
    switch(action.type) {
        case "CREATE_EVENT" :
            const event = { title: action.title, body: action.body};
            const length = state.length;
            const id = (length === 0) ? 1 : state[length - 1].id + 1;
            return [...state, {id, ...event}];
            return state;
        case "DELETE_EVENT" :
            //actionから渡ってくるidと一致しないものだけを抽出してあげて返してあげる
            return state.filter(event => event.id !== action.id );
        case "DELETE_EVENTS" :
            return [];

        default :
            return state;
    }

};

export default events