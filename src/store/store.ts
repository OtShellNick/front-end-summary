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

const deviceWidth  = window.screen.width;

export const StoreAside = (state = deviceWidth > 800, action: IStore) => {
    const {type} = action;

    switch (type) {
        case 'open':
            return true
        case 'close':
            return false
        default:
            return deviceWidth > 800
    }
}