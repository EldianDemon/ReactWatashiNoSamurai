

export const followMaper = (items, itemId, parametr) => {
    debugger
   return items.map(i => {
        if(itemId === i.id) {
            return {
                ...i, ...parametr
            }
        }
        else return i
    })
}