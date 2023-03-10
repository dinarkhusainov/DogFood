import React from 'react'

export default React.createContext({
    user: {},
    token: "",
    api: {},
    gds: [],
    users: [],
    modalActive: false, 
    products: [],
    visibleProducts: [], 
    basket: [],
    favorites: [],
    product: {},
    input: "",
    setProducts: () => {},
    setVisibleProducts: () => {},
    setBasket: () => {},
    setFavorites: () => {},
    setGds: () => {},
    setUsers: () => {},
    setUser: () => {},
    setToken: () => {},
    setApi: () => {},
    setModalActive: () => {},
    setProduct: () => {},
    setInput: () => {},
});