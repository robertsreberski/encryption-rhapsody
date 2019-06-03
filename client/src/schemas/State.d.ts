interface AppState {
    publicKey?: string
    files: IFileState
}

interface Action<T>{
    type: string
    payload: T
}