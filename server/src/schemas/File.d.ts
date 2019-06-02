interface IFile {
  id: string
  name?: string
  mode?: string
  iv?: Buffer
  sessionKey?: Buffer
  progress?: number
}

interface IFileState {
  [id: string]: IFile
}
