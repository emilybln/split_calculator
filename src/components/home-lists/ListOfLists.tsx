/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, {Fragment, useState, VFC} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { IState } from '../../redux/reducers/rootReducers'
import * as styles from './styles'
import {actions} from '../../redux/reducers/listsReducers'

const ListOfLists: VFC = () => {
    const dispatch = useDispatch()

    const lists = useSelector((state: IState) => state.listsReducers.lists)
    const deleteList = (id: number) => {
        dispatch(actions.removeList(id))
    }

  return (
    <Fragment>
      <ul css={styles.lists}>
        {lists.map((list, id) =>
          <li css={styles.listItem} key={list.name}>
            <a css={styles.listLink} href={`/${list.name}`} target='_blank' rel="noreferrer">{list.name}</a>
              <div>{list.amount}</div>
              <div>{list.participants.length || 0}</div>
            <button css={styles.buttonLink} onClick={(e) => deleteList(id)} type="button">Supprimer</button>
          </li>)}
      </ul>
    </Fragment>
  )
}

export default ListOfLists
