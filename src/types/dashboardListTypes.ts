
export interface IState {
    items: IStateItems[]
    current: null | IStateItems[]
}

export interface IStateItems {
    id: number
    name: string
    desc: string
    url: string
    imageUrl: string
    sections: IStateItemsSections[]
}

export interface IStateItemsSections {
    id: number
    name: string
    todos: IStateItemsSectionsTodos[]
}

export interface IStateItemsSectionsTodos {
    id: number
    name: string
    completed: boolean
}

export interface IDashboardPayload {
    name: string
    desc: string
    imageUrl: string
}