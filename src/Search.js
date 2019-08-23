import React from 'react'
import {apiKey} from './apiKey'
import axios from 'axios'
import {SearchResult} from './SearchResult'
import {Grid} from '@material-ui/core'
import Masonry from 'react-masonry-component'
import {makeStyles} from '@material-ui/styles'
import {SearchForm} from './SearchForm'
import {DetectScroll} from './DetectScroll'
import {SearchSuggestion} from './SearchSuggestion'
import {Loading} from './Loading'
import {Error} from './Error'
import {NoResults} from './NoResults'

export function Search () {
  const classes = makeStyles({
    results: {
      margin: '0 auto'
    }
  })()

  const [results, setResults] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [success, setSuccess] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const [inputValue, setInputValue] = React.useState('')
  const [loadMore, setLoadMore] = React.useState(false)

  /** Search */
  React.useEffect(() => {
    if (!query) return

    setLoading(true)
    setError(null)
    setSuccess(false)
    setResults(null)

    axios({
      method: 'GET',
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

        setResults(res.data.response)
        setSuccess(true)
      })
      .catch(err => {
        setError({
          status: 500,
          msg: err.message
        })
      })

    setLoading(false)
  }, [query])

  /** Infinite scroll */
  React.useEffect(() => {
    if (!loadMore) return
    setLoading(true)
    const oldestPostDate = results.slice(-1)[0].timestamp

    axios({
      method: 'GET',
      url: 'https://api.tumblr.com/v2/tagged',
      params: {
        tag: query,
        before: oldestPostDate,
        api_key: apiKey
      },
      validateStatus: () => true
    })
    .then(res => {
      if (res.status !== 200) {
        setError(res.data.meta)
        return
      }
      setResults(results.concat(res.data.response))
    })
    .catch(err => {
      setError({
        status: 500,
        msg: err.message
      })
    })

    setLoadMore(false)
    setLoading(false)
  }, [loadMore, results, query])

  return (
    <div>
      <DetectScroll
        results={results}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <SearchForm
        setQuery={setQuery}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {!query && (
        <SearchSuggestion
          setQuery={setQuery}
          setInputValue={setInputValue}
        />
      )}
      {success && (
        <Masonry
          className={classes.results}
          options={{
            fitWidth: true,
            columnWidth: 320
          }}
          enableResizableChildren={true}
        >
          {results.length === 0 && }
          {results.map(post => <SearchResult post={post} key={post.id} />)}
        </Masonry>
      )}
      {loading && <Loading />}
      {error && <Error error={error} />}
    </div>
  )
}