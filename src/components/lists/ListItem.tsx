/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { FC, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { IList } from '../../interface/list'
import * as styles from './styles'

const ListItem: FC<IList> = (list: IList) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { name, amount, participants, id } = list

  const openList = () => {
    history.push(`/${name}/${id}`) // crée la route + redirige
  }

  return (
    <Fragment>
      <button css={styles.listLink} type="button" onClick={openList}>
        {name}
      </button>
      <div>{amount}</div>
      <div>{participants.length}</div>
    </Fragment>
  )
}

export default ListItem
