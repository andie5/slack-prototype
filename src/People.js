import { useContext } from 'react'
import {AppStateContext} from './AppState'

import styled from 'styled-components'

const PeopleStyle = styled.div`
  padding-top: 1em;

  h3 {
    font-weight: bold
  }
  .Person {
    cursor: pointer;
    &.selected {
      background-color: #F6C444;
      color: #000;
    }
  }
`;

const People = () => {
  const [{people, selectedPerson}, dispatch] = useContext(AppStateContext)
  return <PeopleStyle>
    <h3>PEOPLE</h3>
    <div>{people.map((name, i) => {
    return <p className={`Person ${selectedPerson===name?'selected':''}`} onClick={e => {
      dispatch({ type: 'UPDATE', payload: {
        selectedPerson: name
      }})
    }} key={i}>{name}</p>
    })}</div>
  </PeopleStyle>;
};



export default People;
