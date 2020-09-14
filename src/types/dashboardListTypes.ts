
export interface IState {
    items: IStateItems[]
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