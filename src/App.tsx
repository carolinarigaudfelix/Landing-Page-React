// import { useState } from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'
import {Footer} from './components/Footer'


function App() {
  return (
    <>
      <Header/>
      <section className="main-search">
          <div>
              <h1>How can we help?</h1>
              <span className="input-wrapper">
                  <input type="text" placeholder="Search" />
                  <button className="fa fa-search"></button>
              </span>
          </div>
      </section>
      <section className="main-cards">
        <Card 
          cardTitle='Using Abstract'
          cardDescription='Abstract lets you manage, version, and document your designs in one place.' 
          cardImage='https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png' 
          cardURL=''
        />
        <Card 
          cardTitle='Manage organizations, teams, and projects' 
          cardDescription='Use Abstract organizations, teams, and projects to organize your people and your work.' 
          cardImage='https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png' 
          cardURL=''
        />
        <Card 
          cardTitle='Authenticate to Abstract' 
          cardDescription='Set up and configure SSO, SCIM, and Just-in-Time provisioning.' 
          cardImage='https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png' 
          cardURL=''
        />
        <Card 
          cardTitle='Manage your account' 
          cardDescription='Configure your account settings, such as your email, profile details, and password.' 
          cardImage='https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png' 
          cardURL=''
        />
        <Card 
          cardTitle='Manage billing' 
          cardDescription='Change subscriptions and payment details.' 
          cardImage='https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png' 
          cardURL=''
        />
        <Card 
          cardTitle='Abstract support' 
          cardDescription='Get in touch with a human.' 
          cardImage='https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png' 
          cardURL=''
        />
      </section>
      <Footer/>
    </>
  )
}

export default App
