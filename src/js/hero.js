import React from 'react'
import styled from 'styled-components'

const StyledCounter = styled.div`
  
`
const Paragraph = styled.p`
  
`
const Button = styled.button`
  
`

export default class Hero extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    
    increment = () => this.setState({ count: this.state.count + 1 })
    decrement = () => this.setState({ count: this.state.count - 1 })

  

  render() {
    return (
      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </StyledCounter>
    )
  }
}