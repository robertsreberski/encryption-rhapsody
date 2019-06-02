export const ACTION_TRANSFER = {
  COMMIT: '@transfer/commit',
  REQUEST: {
    START: '@transfer/request/start',
  },
}

export namespace TransferActions {
  export const requestStartTransfer: <T extends { client: IClient; file: IFile }>(
    data: T
  ) => IAction<T> = data => ({
    type: ACTION_TRANSFER.REQUEST.START,
    payload: data,
  })

  export const commitTransfer: (data: ITransfer) => IAction<ITransfer> = data => ({
    type: ACTION_TRANSFER.COMMIT,
    payload: data,
  })
}
