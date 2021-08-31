/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { Fragment, MouseEventHandler } from 'react'


interface IPaymentList {
  value: string,
  deleteLink?: (e :MouseEventHandler<HTMLButtonElement>) => void,
}

export const PaymentList : React.FC<IPaymentList> = ({value, deleteLink}) => {
  const computeLink = `/${value}`

  return (
      <Fragment>
        <a href={computeLink} target="_blank" rel="noreferrer">{value}</a>
        TODO: ajouter delete / edit
      </Fragment>
  )
}
