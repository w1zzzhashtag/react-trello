
export interface IState {
    items: IStateItems[]
    current: null | IStateItems[] | undefined
}

export interface IStateItems {
    id: number
    name: string
    desc: string
    url: string
    imageUrl: string
    
}

export interface IDashboardPayload {
    name: string
    desc: string
    imageUrl: string
}