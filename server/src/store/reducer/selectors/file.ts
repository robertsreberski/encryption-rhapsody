import { createSelector } from 'reselect'

const getFileState: (state: AppState) => IFileState = state => state.File

export const GetAllFiles = createSelector(
  getFileState,
  files => {
    return Object.values(files)
  }
)

export const GetEncryptedFiles = createSelector(
  GetAllFiles,
  files => {
    return files.filter(file => file.progress === 100)
  }
)
