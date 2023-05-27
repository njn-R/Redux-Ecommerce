export const ADDTOCART = (item) => {
  return { type: 'PURCHASE', payload: item }
}

export const REMOVEFROMCART = (deleteItem) => {
  return { type: 'REMOVE', payload: deleteItem }
}

