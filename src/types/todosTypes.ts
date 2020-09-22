export interface IState {
    items: IStateItems[]
}

export interface IStateItems {
    id: number
    dashboardId: number
    sectionId: number
    name: string
    completed: boolean
}