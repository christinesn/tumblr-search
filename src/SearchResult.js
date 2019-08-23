import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Grid, Card, CardContent, Button, CardActionArea} from '@material-ui/core'
import {BlogHeader} from './BlogHeader'
import {PostContent} from './PostContent'
import DefaultTheme from '@material-ui/core/styles/defaultTheme'

export function SearchResult ({ post, setQuery = () => {} }) {
  const classes = makeStyles({
    result: {
      marginRight: 20,
      marginBottom: 20
    },
    post: {
      width: 300,
      boxShadow: DefaultTheme.shadows[3]
    },
    content: {
      padding: 0
    },
    tags: {
      padding: 0,
      marginTop: '1em',
      marginLeft: '0.5em',
      marginRight: '0.5em',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    tagButton: {
      textTransform: 'none',
      fontWeight: 'normal',
      color: 'rgba(0, 0, 0, 0.65)',
      fontSize: '0.95em',
      lineSpacing: '1',
      padding: 0,
      marginLeft: '1em',
      minWidth: 0,
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
        color: 'rgba(0, 0, 0, 0.8)'
      }
    },
    bottomLinks: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '0.95em',
      padding: '0.8em',
      boxSizing: 'border-box',
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      marginTop: '0.75em',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)'
    }
  })()

  function makeNotesLabel () {
    const label = post.note_count === 1 ? ' note' : ' notes'
    return post.note_count.toLocaleString() + label
  }

  return (
    <Grid item className={classes.result}>
      <Card className={classes.post}>
        <BlogHeader
          blog={post.blog}
          theme={post.trail && post.trail[0] && post.trail[0].blog.theme}
          timestamp={post.timestamp}
          postURL={post.post_url}
        />
        <CardContent className={classes.content}>
          <PostContent post={post} />
          <div className={classes.tags}>
            {post.tags.map(tag => (
              <Button
                onClick={setQuery(tag)}
                className={classes.tagButton}
                key={post.id+'-'+tag}
              >
                #{tag}
              </Button>
            ))}
          </div>
        </CardContent>
        <Grid container alignItems="stretch">
          {post.note_count > 0 && (
            <Grid item xs={6}>
              <CardActionArea
                className={classes.bottomLinks}
                href={post.post_url + '#notes'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {makeNotesLabel()}
              </CardActionArea>
            </Grid>
          )}
          <Grid item xs>
            <CardActionArea
              className={classes.bottomLinks}
              href={post.post_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View post
            </CardActionArea>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}