import { rem, size } from 'polished'
import { css } from '@emotion/react'

export const header = css({
  margin: rem(24),
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const section = css({
  marginTop: rem(54),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const title = css({
  fontSize: rem(88),
  color: '#424242',
  fontWeight: 800,
  marginBottom: rem(16),
  fontFamily: 'Lexend',
})

export const subtitle = css({
  fontSize: rem(24),
  color: '#C4C4C4',
  fontFamily: 'Roboto',
  fontWeight: 400,
})

/// /////

export const listOfLists = css({
  backgroundColor: '#FFFFFF',
  borderRadius: rem(4),
  margin: `${rem(20)} auto`,
  height: '100%',
  padding: rem(24),
  width: rem(630),
})

export const addListTitle = css({
  fontSize: rem(17),
  color: '#424242',
  fontFamily: 'Roboto',
  fontWeight: 500,
  marginBottom: rem(16),
})

export const addListInput = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

export const listNameInput = css({
  height: rem(42),
  borderRadius: rem(4),
  border: `${rem(1)} solid #ebebeb`,
  paddingLeft: rem(16),
  width: '100%',
  marginRight: rem(24),
  fontSize: rem(17),
  '::placeholder': {
    color: '#ebebeb',
  },
})

export const addButton = css({
  height: rem(38),
  width: rem(42),
  borderRadius: '100%',
  backgroundColor: '#484ED9',
  borderColor: 'transparent',
  color: '#ffffff',
  fontSize: rem(24),
  fontWeight: 600,
})

///

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
