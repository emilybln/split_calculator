import { rem, size } from 'polished'
import { css } from '@emotion/react'

export const participantsSection = css({
  padding: rem(16),
  backgroundColor: '#FFF',
  borderRadius: rem(4),
})

export const participantInput = css({
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

export const title = css({
  fontSize: rem(88),
  color: '#424242',
  fontWeight: 800,
  marginBottom: rem(16),
  fontFamily: 'Lexend',
})

export const backButton = css({
  fontSize: rem(15),
  color: '#424242',
  fontWeight: 300,
  textDecoration: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  ':hover': {
    color: '#484ED9',
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
