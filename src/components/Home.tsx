/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { Fragment } from 'react'
import * as styles from './styles'

import Lists from './lists/Lists'
import { section } from './styles'
import InputAddNewList from './input-add-new-list/InputAddNewList'

const Home: React.FC = () => (
  <Fragment>
    <section css={styles.header}>
      <div css={styles.title}>Split Calculator</div>
      <div css={styles.subtitle}>Good accounts make good friends</div>
    </section>
    <section css={styles.section}>
      <InputAddNewList />
      <Lists />
    </section>
  </Fragment>
)

export default Home
