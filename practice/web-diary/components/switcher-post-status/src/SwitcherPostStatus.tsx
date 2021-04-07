import React       from 'react'
import styled      from '@emotion/styled'
import { useIntl } from 'react-intl'

import { Button }  from '@ui/button'
import { Box }     from '@ui/layout'

import messages    from '../messages/messages'

const StyledSwitcher = styled('div')(() => ({
  margin: '15px 0',
  minWidth: '180px',
}))

export const SwitcherPostStatus = () => {
  const intl = useIntl()
  return (
    <StyledSwitcher>
      <Box justifyContent='space-between'>
        <Button color='black'> {intl.formatMessage(messages.info)}</Button>
        <Button color='black'> {intl.formatMessage(messages.like)}</Button>
      </Box>
    </StyledSwitcher>
  )
}
