export const setStorage = (storageItem, storageKey) => {

    if(Array.isArray(storageItem)){
        storageItem = JSON.stringify(storageItem);
    }
    localStorage.setItem(storageKey, storageItem);
}


export const getStorage = (storageKey) => {
    let items = localStorage.getItem(storageKey);
    if(items){
        return JSON.parse(items);
    }else {
        localStorage.setItem(storageKey, JSON.stringify([]));
        return [];
    }
}

export const addItemToStorage = (storageItem, storageKey) => {
    let itemsFromStorage = getStorage(storageKey);
    itemsFromStorage.push(storageItem);
    const itemIndex = itemsFromStorage.length - 1;
    itemsFromStorage = JSON.stringify(itemsFromStorage);
    setStorage(itemsFromStorage, storageKey);
    return itemIndex;
}


export const deleteItemFromStorage = (itemIndex, storageKey) => {
    let itemsFromStorage = getStorage(storageKey);
    itemsFromStorage.splice(itemIndex, 1);
    itemsFromStorage = JSON.stringify(itemsFromStorage);
    setStorage(itemsFromStorage, storageKey);
    return -1;
}

export const checkItemInStorage = (itemToMatch, storageKey) => {
    const itemsFromStorage = getStorage(storageKey);
    const itemMatch = (currentItem) => currentItem.id === itemToMatch.id;
    const itemIndex = itemsFromStorage.findIndex(itemMatch);
    return itemIndex === -1 ? -1 : itemIndex
}

export default getStorage;
