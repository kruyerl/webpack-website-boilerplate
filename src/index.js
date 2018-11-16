console.log('\nWelcome :) \nPlease feel free to poke around. \n%cPackage manager: NPM \nBuild tool: Webpack \nJS: React \nStyles: SASS/StyledComponents ', 'color: #3EE6B2','\nPlease dont hesitate to ask me any questions you might have. \n-kruyerl\n ')

//Assets
import Favicon from "./img/favicon.ico";

//Styles
import "./sass/main.sass"
import styled from 'styled-components'

//js
import React from 'react'
import ReactDOM from 'react-dom'
import Hero from './js/hero'


class LukeKruyerReact extends React.Component {
  



  
  render () {
    return <div className='lukeKruyerReact'>

      <h1>Hi :)</h1>
      <Hero/>
    </div>
  }
}
const el = document.getElementById('Root')
ReactDOM.render(<LukeKruyerReact />, el)