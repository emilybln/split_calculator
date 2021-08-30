/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { Fragment } from 'react'
import * as styles from './styles'

import ListOfLists from './home-lists/ListOfLists'
import ListItem from './home-list-item/ListItem'
import {section} from './styles'


const Home: React.FC = () => (
        <Fragment>
            <section css={styles.header}>
                <div css={styles.title}>Split Calculator</div>
                <div css={styles.subtitle}>Good accounts make good friends</div>
            </section>
          <section css={styles.section}>
            <ListItem/>
            <ListOfLists />
          </section>

        </Fragment>
    )


export default Home
