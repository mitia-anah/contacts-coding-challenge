import React, { useEffect } from 'react'
const request =
  'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'

export function Contacts() {
  function fetchData() {
    const res = fetch(request)
    const data = res.JSON()
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return <div></div>
}
