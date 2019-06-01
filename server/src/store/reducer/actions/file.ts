export const ACTION_FILE = {
  REQUEST: {
    ENCRYPT: '@file/request/encrypt',
  },
  COMMIT: '@file/commit',
}

export namespace FileActions {
  export const requestEncryptFile: <T extends { path: string; filename: string; mode: string }>(
    data: T
  ) => IAction<T> = data => ({
    type: ACTION_FILE.REQUEST.ENCRYPT,
    payload: data,
  })
  export const commitFile: (data: IFile) => IAction<IFile> = data => ({
    type: ACTION_FILE.COMMIT,
    payload: data,
  })
}
