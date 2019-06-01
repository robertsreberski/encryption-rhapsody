interface IFile {
  id: string
  name?: string
  mode?: string
  iv?: string
  sessionKey?: string
  progress?: number
}

interface IFileState {
  [id: string]: IFile
}
