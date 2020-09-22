export interface IState {
    items: IStateItems[]
}

export interface IStateItems {
    id: number
    dashboardId: number
    name: string
}