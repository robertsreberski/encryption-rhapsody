interface IFile {
    id: number
    name: string
    size: number
    progress: number
}

interface IFileState {
    [id: string]: IFile
}