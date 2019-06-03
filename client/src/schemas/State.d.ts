interface AppState {
    publicKey?: string
    privateKey?: string
    server?: IServer
    files: IFileState
}

interface Action<T>{
    type: string
    payload: T
}