import { Route, Routes } from 'react-router-dom'

import { HomeHeader } from '../../pages/Home/Header'

import { Navigation } from './navigation'
import { Title } from './title'
import { TopForm } from '../top-form'

import burgersBg from './photo/burgers-bg.jpg'
import menuBg from './photo/menu-bg.jpg'
import homeBg from './photo/video.png'
import main from './photo/main.jpg'
import bussinessBg from './photo/busMenu.jpg'
import classes from './styles.module.scss'
import { Open } from '../../Open'


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
        <Route path="business-menu" element={(
          <header
            className={classes.header}
            style={{
              height: '400px',
              background: `url(${bussinessBg}) center / cover no-repeat`,
            }}
          >
            <Navigation color="#474747" backgroundColor="#FFF" />
            <Title>Бизнес меню</Title>
          </header>
        )} />
        <Route path="business-menu">
          <Route path="menu_subscription"
            element={(
              <header
                className={classes.header}
                style={{
                  height: '156px',
                  background: `#10B4A4`,
                }}
              >
                <Navigation color="#474747" backgroundColor="#FFF" />
              </header>
            )} />
        </Route>
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
      <Route path="restaurant" element={(
        <header
          className={classes.header}
          style={{
            height: '400px',
            background: `url(${main}) center / cover no-repeat`,
          }}
        >
          <Navigation color="#474747" backgroundColor="#FFF" />
          <Title>Ресторан</Title>
        </header>
      )} />
      <Route path="menu_page" element={(
        <header
          className={classes.header}
          style={{
            height: '400px',
            background: `url(${menuBg}) center / cover no-repeat`,
          }}
        >
          <Open />
          <Navigation color="#474747" backgroundColor="#FFF" />
          <Title>Меню</Title>
        </header>
      )} />
      <Route path="burgers">
        <Route path="/burgers:id"
          element={(
            <header
              className={classes.header}
              style={{
                height: '156px',
                background: `#10B4A4`,
              }}
            >
              <Navigation color="#474747" backgroundColor="#FFF" />
            </header>
          )} />
      </Route>
    </Routes>
  </>
)