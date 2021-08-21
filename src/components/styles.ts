import { rem } from 'polished'
import {css} from '@emotion/react'

export const titleSection = css({
    margin: rem(24),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: rem(200),
})

export const section = css({
    marginTop: rem(54),
    display: 'flex',
})

export const title = css({
    fontSize: rem(210),
    color: '#2bb0b75e',
    fontWeight: 800,
    lineHeight: 0.95,
    marginTop: rem(-96),
    marginLeft: rem(-166)
})

export const listSection = css({
    margin: `${rem(20)} ${rem(60)}`,
})

export const subtitle = css ({
    margin: `${rem(20)} 0`,
    fontSize: rem(24),
    fontWeight: 400,
})

export const lists = css ({
    listStyleType: 'none'
})
