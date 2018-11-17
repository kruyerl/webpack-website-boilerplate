import React from 'react'
import styled from 'styled-components'

const StyledTextContainer = styled.div`
  
`

export default class Hero extends React.Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <StyledTextContainer className="container">
        <h1>Hi :)</h1>
        <h3>I am a South African based UX Designer, Front-end Web Developer & Brand Consultant.</h3>
        <p>I partner with people in order to build strong brands, tell stories and craft meaningful experiences.</p>
      </StyledTextContainer>
    )
  }
}