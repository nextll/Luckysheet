const setItem = function (key, val): void{
    localStorage.setItem(key, val);
};

const getItem = function (val): string|null{
    return localStorage.getItem(val);
}

const key = {
    rowFillDesignArea: 'rowFillDesignArea',
}

export default {
    setItem,
    getItem,
    key
}