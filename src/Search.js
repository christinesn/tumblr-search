import React from 'react'
import {apiKey} from './apiKey'
import axios from 'axios'

export function Search () {
  const [response, setResponse] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [success, setSuccess] = React.useState(false)
  const [query, setQuery] = React.useState('cats')

  React.useEffect(() => {
    setLoading(true)
    setError(null)
    setSuccess(false)
    setResponse(null)

    axios({
      method: 'post',
      url: 'https://api.tumblr.com/v2/tagged',
      params: {
        tag: query,
        api_key: apiKey
      },
      validateStatus: () => true
    })
      .then(res => {
        if (res.status !== 200) {
          setError(res.data.meta)
          return
        }

        setResponse(res)
        setSuccess(true)
      })
      .catch(err => {
        setError(err.message)
      })

    setLoading(false)
  }, [query])

  return (
    <div>
      {!loading && !error && !success && 'Search.'}
      {loading && 'Loading...'}
      {error && 'Error: ' + JSON.stringify(error)}
      {success && 'Success: ' + JSON.stringify(response.data.response)}
    </div>
  )
}