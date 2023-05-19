const INITIAL_STATE = { mood : '(っˆڡˆς)' }

const moodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HAPPY':
        return { mood: '٩(◕‿◕｡)۶' }
        case 'SAD':
        return { mood : 'ಥ_ಥ' }
        case 'ANGRY':
        return { mood: 'ლಠ益ಠ)ლ' }
        case 'CONFUSED':
        return { mood: '⊙﹏⊙' }
        case 'RESET':
        return { mood: '(っˆڡˆς)' }
        default:
        return state
    }

    }

    const store = Redux.createStore(moodReducer);
