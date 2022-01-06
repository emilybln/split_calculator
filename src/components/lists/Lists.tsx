/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { Fragment, useState, VFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, useTypedSelector } from '../../redux/reducers/rootReducers'
import * as styles from './styles'
import { removeList } from '../../redux/reducers/listsReducers'
import ListItem from './ListItem'
import { selectLists } from '../../selectors/listsSelector'

const Lists: VFC = () => {
  const dispatch = useDispatch()

  const lists = useTypedSelector(selectLists)
  console.log('lists', lists)
  const deleteList = (id: number) => {
    dispatch(removeList(id))
  }

  return (
    <Fragment>
      <ul css={styles.lists}>
        {lists.map((list) => (
          <li css={styles.listItem} key={list.name}>
            <ListItem {...list} />
            <button css={styles.buttonLink} onClick={(e) => deleteList(list.id)} type="button">
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default Lists
