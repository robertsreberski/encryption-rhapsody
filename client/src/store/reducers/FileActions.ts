export const ACTION_FILE = {
  COMMIT: {
    FILE_START: '@file/commit/recieve',
    FILE_PROGRESS: '@file/commit/progress',
    FILE_FINISHED: '@file/commit/recieve',
  },
}

export namespace FileAction {
  export const commitFileStart = (data: IFile) => ({
    type: ACTION_FILE.COMMIT.FILE_START,
    payload: data,
  })

  export const commitFileProgress = (data: IFile) => ({
    type: ACTION_FILE.COMMIT.FILE_PROGRESS,
    payload: data,
  })

  export const commitFileFinished = (data: IFile) => ({
    type: ACTION_FILE.COMMIT.FILE_FINISHED,
    payload: data,
  })
}
