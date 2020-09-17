export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

/* ActionCreator: Actionを作成するメソッド */
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})
