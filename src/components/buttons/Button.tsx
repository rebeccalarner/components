import styled from 'styled-components'

export const Button = styled.button`
  :hover {
    background: #473764;
    border: 1px solid #473764;
    color: white;
  }

  background: pink;
  border: 1px solid #64518A;
  border-radius: 20px; 
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: normal;
  line-height: 1.5;
  margin: 0;
  white-space: nowrap;
  padding: 4px 8px;
  vertical-align: middle;
`

export const LinkButton = Button.withComponent('a').extend`

  :hover {
    text-decoration: none;
  }
  
  user-select: none;

`
