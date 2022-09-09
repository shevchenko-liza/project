import { Routes, Route, Navigate } from "react-router-dom"

import { Menu } from './components/Menu'


import { HomePage } from './pages/Home'
import { CatalogPage } from './pages/Catalog'
import { BurgerPage} from './pages/Burger'

import{Restaurant} from './pages/Restaurant'
import { BusinessMenu } from "./pages/Business Menu"



import './App.scss'
import { MenuPage } from "./pages/MenuPage"

const App = () => (
  <div className="App">
    
    <Menu />
    <Routes>
      <Route path="menu">
        <Route path=":category" element={<CatalogPage />} />
        <Route index element={<Navigate to="/" />} />
      </Route>

      <Route path="burgers">
        <Route path=":id" element={<BurgerPage />} />
        <Route index element={<Navigate to="/" />} />
      </Route>
      <Route index element={<HomePage />} />


   <Route>
        <Route path="restaurant" element={<Restaurant />} />
      <Route index element={<HomePage />} />
      </Route>


    <Route path="menu">
        <Route path="business-menu" element={<BusinessMenu />} />
        <Route index element={<Navigate />} />
      </Route>
    
      <Route path="HomePage">
        <Route path="menu-page" element={<MenuPage />} />
     
      </Route>

      </Routes>

  </div>
)

export default App