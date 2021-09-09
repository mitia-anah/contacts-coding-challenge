import { createContext, useState, useEffect } from 'react'

export const Context = createContext()
const request = `https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json`
export default function ContactsContextComponent({ children }) {
  const [state, setState] = useState([])
  async function fetchData() {
    const res = await fetch(request)
    const data = await res.json()
    setState(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <Context.Provider value={{ state }}>{children}</Context.Provider>
}
