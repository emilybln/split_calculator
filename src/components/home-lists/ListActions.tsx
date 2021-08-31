import React, { FC, Fragment } from 'react'

interface IListActions {
  onDeleteClick: () => void
  onEditClick: () => void
}

const ListActions: FC<IListActions> = ({onDeleteClick, onEditClick}) => (
  <Fragment>
    <button onClick={onDeleteClick} type="button" >
      <img src="../../../public/trash.svg" alt='delete' />
    </button>
    <button onClick={onEditClick} type="button" >
      <img src="../../../public/edit.svg" alt='edit' />
    </button>
  </Fragment>
)

export default ListActions
