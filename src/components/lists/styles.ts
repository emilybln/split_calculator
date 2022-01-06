import { rem, size } from 'polished'
import { css } from '@emotion/react'

export const lists = css({
  listStyleType: 'none',
  padding: rem(0),
  margin: rem(0),
})

export const listItem = css({
  fontSize: rem(17),
  color: '#424242',
  fontWeight: 500,
  margin: `0 auto ${rem(8)}`,
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#FFFFFF',
  borderRadius: rem(4),
  height: '100%',
  padding: rem(24),
  width: rem(630),
})

export const listLink = css({
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: rem(17),
  color: '#424242',
  fontWeight: 300,
  textDecoration: 'none',
  ':hover': {
    color: '#484ED9',
    fontWeight: 500,
  },
})

export const buttonLink = css({
  fontSize: rem(15),
  color: '#ebebeb',
  fontWeight: 300,
  textDecoration: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  ':hover': {
    color: 'red',
  },
})
