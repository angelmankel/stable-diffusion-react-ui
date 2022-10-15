// const Test = styled.div`
//   background-color: blue;
//   padding: 50px;
// `

const Test = styled(Container)`
  background-color: blue;
  padding: 50px;
  ${props => props.red && css`
    color: red;
  `}
`