interface IFile {
    id: string
    name: string
    size: number
    progress: number
}

interface IFileState {
    [id: string]: IFile
}