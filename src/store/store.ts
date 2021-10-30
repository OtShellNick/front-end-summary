interface IStore {
    type: string
}

export const StoreMenu = (state = 'main', action: IStore) => {

    switch (action.type) {
        case 'about':
            return 'about';
        case 'works':
            return 'works';
        case 'contacts':
            return 'contacts';
        default:
            return 'main'
    }
}

export const StoreAside = (state = true, action: IStore) => {
    const {type} = action;
console.log(type)
    switch (type) {
        case 'open':
            return true
        case 'close':
            return false
        default:
            return true
    }
}