

export interface IAddSection {
    type: 'ADD_SECTIONS',
    payload: {
        id: number
        name: string
    }
}
export const addSection = (id: number, name: string):IAddSection => {
    return {
        type: 'ADD_SECTIONS',
        payload: {
            id: id,
            name: name
        }
    }
}

export type sectionsActionType = IAddSection