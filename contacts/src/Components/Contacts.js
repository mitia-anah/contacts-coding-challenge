import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../Context/context'

export function Contacts() {
  const { state } = useContext(Context)
  console.log(state)
  const listOfContacts = state
    .map((list) => (
      <ListContainer>
        <img src={list.avatar} />
        <div>
          <span>{list.first_name}</span>
          <span>{list.last_name}</span>
          <p>{list.email}</p>
        </div>
        <input type='checkbox' />
      </ListContainer>
    ))
    .sort((a, b) => (a.last_name > b.last_name ? -1 : 1))

  return (
    <div>
      <ContactTable>{listOfContacts}</ContactTable>
    </div>
  )
}

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  border-bottom: 3px solid #e0e0e0;

  img {
    border: 1px solid;
    border-radius: 50%;
  }
  div {
    text-align: start;
  }
`
const ContactTable = styled.div`
  background: #ededed;
`
