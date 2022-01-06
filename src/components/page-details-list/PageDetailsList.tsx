/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { ChangeEvent, FC, Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { useCurrentListInfo } from '../../hooks/useCurrentListInfo'
import { addParticipant } from '../../redux/reducers/listsReducers'

import * as styles from './styles'
import { useTypedSelector } from '../../redux/reducers/rootReducers'
import { selectListParticipants } from '../../selectors/participantsSelector'
import { selectLists } from '../../selectors/listsSelector'

export const PageDetailsList: FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>() // id renvoyé par l'url

  const [newParticipant, setNewParticipant] = useState('')

  const currentList = useCurrentListInfo(Number(id))
  console.log('currentList', currentList)
  if (!currentList) return null // page 404
  const { participants, name } = currentList

  console.log('participant from current', participants)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setNewParticipant(e.target.value)

  const addNewParticipants = () => {
    setNewParticipant('')
    dispatch(
      addParticipant({ ...currentList, participants: participants.concat([newParticipant]) })
    )
  }

  const teeest = participants.join(', ')

  return (
    <Fragment>
      <div css={styles.title}>{name}</div>
      <button css={styles.backButton} type="button" onClick={(e) => history.goBack()}>
        Back
      </button>
      <section>
        <div css={styles.participantsSection}>
          <input
            aria-label="add-participants"
            value={newParticipant}
            onChange={handleOnChange}
            css={styles.participantInput}
            placeholder="Participant"
          />
          <button css={styles.addButton} onClick={addNewParticipants} type="button">
            +
          </button>
        </div>
      </section>
      {teeest}
    </Fragment>
  )
}
