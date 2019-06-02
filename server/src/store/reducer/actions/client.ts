export const ACTION_CLIENT = {
  COMMIT: '@client/commit',
}

export namespace ClientActions {
  export const commitClient: (data: IClient) => IAction<IClient> = data => ({
    type: ACTION_CLIENT.COMMIT,
    payload: data,
  })
}
