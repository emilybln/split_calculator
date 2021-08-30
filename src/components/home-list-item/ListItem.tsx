/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { ChangeEvent, Fragment, useState, VFC } from 'react'
import { useDispatch } from 'react-redux'
import * as styles from './styles'
import { actions } from '../../redux/reducers/listsReducers'


const ListItem : VFC = () => {

  const dispatch = useDispatch()
  const [listTitle, setListTitle] = useState('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setListTitle(e.target.value)
  const addNewList = () => {
    setListTitle('')
    dispatch(actions.addList({name: listTitle, amount: 0, participants: 0}))}

  return (
    <Fragment>
      <div css={styles.listOfLists}>
        <div css={styles.addListTitle}>Create a bill resume to split </div>
        <div css={styles.addListInput}>
          <input aria-label="add-list"
                 value={listTitle}
                 onChange={handleOnChange}
                 id={`list-${listTitle}`}
                 css={styles.listNameInput}
                 placeholder="Bill Name"
          />
          <button css={styles.addButton} onClick={addNewList} type='button'>+</button>
        </div>
      </div>
    </Fragment>
      )}

export default ListItem
