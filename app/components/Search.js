import React from 'react'
import cx from 'classnames'
import Outer from 'components/Outer.js'

function SearchBar (props) {
  return (
    <div className='search-bar f aic jcb'>
      <input
        className='s1'
        type='search'
        value=''
        placeholder='Type something' />
    </div>
  )
}

function Tags (props) {
  const tags = [
    { text: 'desk' },
    { text: 'laptop' }
  ]
  return (
    <div className='search-tags'>
      {tags.map(tag => (
        <button key={tag.text} className={cx('button', {
          'button--border': props.activeTags.indexOf(tag.text) < 0
        })} onClick={e => {
          props.toggle(tag.text)
        }}>{tag.text}</button>
      ))}
    </div>
  )
}

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mode: 'search',
      activeTags: [
        'laptop'
      ]
    }
  }

  toggleActiveTag (val) {
    this.setState(state => {
      const tags = state.activeTags.indexOf(val) > -1 ? state.activeTags.filter(tag => {
        return tag !== val
      }) : state.activeTags.concat(val)

      return {
        activeTags: tags
      }
    })
  }

  toggle () {
    this.setState(state => ({
      mode: state.mode === 'search' ? 'tags' : 'search'
    }))
  }

  render () {
    const { mode, activeTags } = this.state

    return (
      <Outer>
        <div className='search'>
          <div className='search__toggle f aic'>
            <button className={cx({
              'is-selected': mode === 'search'
            })} onClick={this.toggle.bind(this)}>search</button>
            /
            <button className={cx({
              'is-selected': mode === 'tags'
            })} onClick={this.toggle.bind(this)}>tags</button>
          </div>
          {mode === 'search' ? (
            <SearchBar />
          ) : (
            <Tags
              activeTags={activeTags}
              toggle={this.toggleActiveTag.bind(this)} />
          )}
        </div>
      </Outer>
    )
  }
}

export default Search
