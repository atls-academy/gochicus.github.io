import React           from 'react'
import styled          from '@emotion/styled'
import { useIntl }     from 'react-intl'

import { Button }      from '@ui/button'
import { Input }       from '@ui/input'
import { Box, Layout } from '@ui/layout'

import messages        from '../messages/messages'

const Form = styled('div')(() => ({
  margin: '1rem 0',
  minWidth: '300px',
}))

const PostAddForm = () => {
  const intl = useIntl()
  return (
    <Form>
      <Layout display='flex'>
        <Box>
          <Input placeholder='Ваша запись' />
        </Box>
        <Box flexBasis='40px' />
        <Box>
          <Button color='black'>{intl.formatMessage(messages.add)}</Button>
        </Box>
      </Layout>
    </Form>
  )
}

export default PostAddForm
