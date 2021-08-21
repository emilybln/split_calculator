/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { Fragment, VFC } from 'react'
import { useSelector } from 'react-redux'
import { IState } from '../../redux/reducers/rootReducers'
import * as styles from '../styles'

const ListOfLists: VFC = () => {

const lists = useSelector((state: IState) => state.listsReducers.lists)

  return (
    <Fragment>
      <ul css={styles.lists}>
        {lists.map(list =>
          <li>
            <a href={`/${list}`} target='_blank' rel="noreferrer">{list}</a>
          </li>)}
      </ul>
    </Fragment>
  )
}

export default ListOfLists
