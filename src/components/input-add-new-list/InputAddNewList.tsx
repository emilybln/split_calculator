/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { ChangeEvent, Fragment, useState, VFC } from 'react'
import { useDispatch } from 'react-redux'
import * as styles from './styles'
import { addList } from '../../redux/reducers/listsReducers'
import { selectLists } from '../../selectors/listsSelector'
import { useTypedSelector } from '../../redux/reducers/rootReducers'

const InputAddNewList: VFC = () => {
  const dispatch = useDispatch()
  const listsLength = useTypedSelector(selectLists).length
  const [listTitle, setListTitle] = useState('')

  console.log('length', listsLength)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setListTitle(e.target.value)
  const addNewList = () => {
    setListTitle('')
    dispatch(
      addList({
        id: Math.floor(Math.random() * 100),
        name: listTitle,
        amount: 0,
        participants: [],
        isSelected: false,
      })
    )
  }

  return (
    <Fragment>
      <div css={styles.listOfLists}>
        <div css={styles.addListTitle}>Create a bill resume to split </div>
        <div css={styles.addListInput}>
          <input
            aria-label="add-list"
            value={listTitle}
            onChange={handleOnChange}
            css={styles.listNameInput}
            placeholder="List name"
          />
          <button css={styles.addButton} onClick={addNewList} type="button">
            +
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default InputAddNewList
