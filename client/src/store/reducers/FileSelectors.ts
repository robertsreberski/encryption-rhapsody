import { createSelector } from 'reselect'

const getFileState: (state: AppState) => IFileState = state => state.files

export const GetAllFiles = createSelector(
  getFileState,
  files => {
    return Object.values(files)
  }
)

