import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component<PropsWithChildren> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>nishidabenda!</Text>
      </View>
    )
  }
}
