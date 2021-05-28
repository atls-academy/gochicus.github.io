import React, { useEffect, useState } from 'react'
import { useIntl }                    from 'react-intl'

import { Button }                     from '@ui/button'
import { Input }                      from '@ui/input'
import { Layout, Row }                from '@ui/layout'
import { Text }                       from '@ui/text'
import { useButtonStatus }            from '@store/button-status'
import { usePostData }                from '@store/post-data'

import messages                       from './messages'
import { addItem, fetchInitialData }  from './actions'

export const FormPostAdd = () => {
  const intl = useIntl()
  const [, setStatus] = useButtonStatus()
  const [postData, setPostData] = usePostData()
  const [value, setValue] = useState('')
  useEffect(() => {
    setPostData(fetchInitialData())
  }, [])
  return (
    <Row justifyContent='flex-start' width='98%'>
      <Layout flexBasis='25px' />
      <Input
        size={46}
        placeholder={intl.formatMessage(messages.yourPost)}
        onChange={event => setValue(event.target.value)}
        value={value}
      />
      <Layout flexBasis='5px' />
      <Button
        maxHeight='40px'
        maxWidth='50px'
        backgroundColor='purple'
        onClick={() => {
          setPostData(addItem(postData, value))
          setValue('')
          setStatus('all')
        }}
      >
        <Text color='white' fontWeight='bold' fontSize='large'>
          {intl.formatMessage(messages.add)}
        </Text>
      </Button>
      <Layout flexBasis='15px' />
    </Row>
  )
}