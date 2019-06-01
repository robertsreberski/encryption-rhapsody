import { createSelector } from 'reselect'

const getFileState: (state: AppState) => IFileState = state => state.File

export const GetAllFiles = createSelector(
  getFileState,
  files => {
    return Object.values(files)
  }
)
