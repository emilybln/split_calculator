import React, { ChangeEvent, Fragment, useState, VFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as styles from '../styles'
import { actions } from '../../redux/reducers/listsReducers'
import { IState } from '../../redux/reducers/rootReducers'


const ListItem : VFC = () => {

  const dispatch = useDispatch()
  const [listTitle, setListTitle] = useState('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setListTitle(e.target.value)
  const lists = useSelector((state: IState) => state.listsReducers.lists)
  const addNewList = () => {
    const newList = lists.concat(listTitle)
    dispatch(actions.updateList(newList))
  }

  return (
    <Fragment>
    <section css={styles.listSection}>
      <div css={styles.subtitle}>Toutes les listes</div>
    <div>Ajouter une liste</div>
    <input aria-label="add-list"
           value={listTitle}
           onChange={handleOnChange}
           id={`list-${listTitle}`}
    />
    <button onClick={addNewList} type='button'>Ajouter</button>
    </section>
    </Fragment>
      )}

export default ListItem
