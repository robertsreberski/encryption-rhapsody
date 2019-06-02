interface AppState {
    publicKey?: string
    privateKey?: string
    files: IFiles[]
}

interface Action<T>{
    type: string
    payload: T
}