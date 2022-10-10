import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { Header } from './layout/header'

import { MenuPage } from "./pages/MenuPage"
import { Menu } from './components/Menu'

import { HomePage } from './pages/Home'
import { CatalogPage } from './pages/Catalog'
import { BurgerPage } from './pages/Burger'

import { Restaurant } from './pages/Restaurant'
import { BusinessMenu } from "./pages/Business Menu"

import { catalogSlice } from './store/slices/catalog'
import { Basket } from './pages/Basket'
import {Text} from './components/Text'

import { CART } from "./store/slices/cart"

import './App.scss'

const App = () => {
  const dispatch = useDispatch()
  const cart = useSelector(CART)

  useEffect(() => {
    document.body.style.overflow = cart.opened ? 'hidden' : 'auto'
    document.body.style.paddingRight = cart.opened ? '15px' : '0px'
  }, [cart.opened])

  useEffect(() => {
    fetch('/api/catalog')
      .then(response => response.json())
      .then(data => {
        console.log({ data });
        dispatch(catalogSlice.actions.setList(data))
      })
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <Menu />
      <Routes>
        <Route path="menu">
          <Route path="business-menu" element={<BusinessMenu />} />
          <Route path=":category" element={<CatalogPage />} />
          <Route index element={<Navigate to="/" />} />
        </Route>

        <Route path="burgers">
          <Route path=":id" element={<BurgerPage />} />
          <Route index element={<Navigate to="/" />} />
        </Route>

        <Route path="restaurant" element={<Restaurant />} />

        <Route path="menu-page" element={<MenuPage />} />

        <Route index element={<HomePage />} />

      </Routes>

      <Basket />
    </div>

  )
}
export default App