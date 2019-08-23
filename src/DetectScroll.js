import React from 'react'

export function DetectScroll ({ results, loadMore, setLoadMore }) {
  function getDocumentHeight () {
    const body = document.body
    const html = document.documentElement

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
  }

  function getClientHeight () {
    return document.documentElement.clientHeight
  }

  function getScrollTop () {
    const body = document.body
    const html = document.documentElement

    return Math.max(
      body.scrollTop,
      html.scrollTop
    )
  }

  function handleScroll () {
    if (!results || loadMore) return

    const documentHeight = getDocumentHeight()
    const scrollTop = getScrollTop()
    const clientHeight = getClientHeight()

    if ((scrollTop +  clientHeight) >= documentHeight - (clientHeight / 2)) {
      setLoadMore(true)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return null
}
