import React, { useContext, useState } from 'react'
import { Context } from '../Context/context'
import { Contacts } from './Contacts'

export function SearchBar() {
  const [search, setSearch] = useState('')
  const { state } = useContext(Context)
  const searchNames = state?.filter((name) => {
    return (
      name.last_name.toLowerCase().includes(search) ||
      name.first_name.toLowerCase().includes(search)
    )
  })
  return (
    <div>
      <input
        type='text'
        name='name'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {searchNames?.map((item) => (
          <Contacts searchNames={searchNames} item={item} />
        ))}
      </ul>
    </div>
  )
}
