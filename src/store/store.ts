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