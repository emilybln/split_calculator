import {rem, size} from 'polished'
import {css} from '@emotion/react'

export const listOfLists = css({
    backgroundColor: '#FFFFFF',
    borderRadius: rem(4),
    margin: `${rem(20)} auto`,
    height: '100%',
    padding: rem(24),
    width: rem(630),
})

export const addListTitle = css ({
    fontSize: rem(17),
    color: '#424242',
    fontFamily: 'Roboto',
    fontWeight: 500,
    marginBottom: rem(16),
})

export const addListInput = css ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
})

export const listNameInput = css ({
    height: rem(42),
    borderRadius: rem(4),
    border: `${rem(1)} solid #ebebeb`,
    paddingLeft: rem(16),
    width: '100%',
    marginRight: rem(24),
    fontSize: rem(17),
    '::placeholder': {
        color: '#ebebeb',
    }
})

export const addButton = css ({
    height: rem(38),
    width: rem(42),
    borderRadius: '100%',
    backgroundColor: '#484ED9',
    borderColor: 'transparent',
    color: '#ffffff',
    fontSize: rem(24),
    fontWeight: 600,
})

