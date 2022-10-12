import { Route, Routes } from 'react-router-dom'

import { HomeHeader } from '../../pages/Home/Header'

import { Navigation } from './navigation'
import { Title } from './title'
import { TopForm } from '../top-form'

import burgersBg from './photo/burgers-bg.jpg'
import menuBg from './photo/menu-bg.jpg'
import homeBg from './photo/video.png'

import classes from './styles.module.scss'

export const Header = () => (
  <>
    <TopForm />
    <Routes>
      <Route path="menu">
        <Route path="burgers" element={(
          <header
            className={classes.header}
            style={{
              height: '400px',
              background: `url(${burgersBg}) center / cover no-repeat`,
            }}
          >
            <Navigation color="#474747" backgroundColor="#FFF" />
            <Title>Бургеры</Title>
          </header>
        )} />
        <Route index element={(
          <header
            className={classes.header}
            style={{
              height: '400px',
              background: `url(${menuBg}) center / cover no-repeat`,
            }}
          >
            <Navigation color="#474747" backgroundColor="#FFF" />
            <Title>Меню</Title>
          </header>
        )} />
      </Route>
      <Route index element={(
        <header
          className={classes.header}
          style={{
            height: '900px',
            background: `url(${homeBg}) center / cover no-repeat`,
          }}
        >
          <Navigation />
          <HomeHeader />
        </header>
      )} />
    </Routes>
  </>
)