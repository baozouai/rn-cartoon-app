import React, { memo } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import { pxSize } from '../../../../util';

function Index(props) {

  const { navigation } = props;

  function renderInfo() {
    const avatarProps = {
      source: require('../../../../assets/img/mine/avatar.png'),
      style: styles.avatar,
    }
    return (
      <View style={styles.leftWrapper}>
        <Image {...avatarProps} />
        <View style={styles.infoWrapper}>
          <View>
            <Text style={styles.username}>暴走</Text>
            <Text style={styles.personInfo} onPress={() => navigation.navigate('AboutMe')}>个人信息 &gt;</Text>
          </View>
          <Image source={require('../../../../assets/img/mine/beauty_technician_v15.png')} />
        </View>
      </View>
    )
  }
  function renderOperation() {
    return (
      <View style={styles.operationWrapper}>
        <Image style={[styles.icon,]} source={require('../../../../assets/img/mine/icon_navigation_item_message_white.png')} />
        <Image style={[styles.icon,]} source={require('../../../../assets/img/mine/icon_navigation_item_set_white.png')} />
      </View>
    )
  }
  return (
    <View style={styles.wrapper}>
      {renderOperation()}
      {renderInfo()}
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#06C1AE',
    height: pxSize(280),
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  infoWrapper: {
    flexDirection: 'row',
  },
  avatar: {
    width: pxSize(292 / 2),
    height: pxSize(264 / 2),
    margin: 10,
  },
  username: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  personInfo: {
    color: '#fff',
    marginTop: 20,
  },
  operationWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: pxSize(60),
  },
  icon: {
    width: pxSize(40),
    height: pxSize(40),
    marginHorizontal: pxSize(10),
  }
})
export default memo(Index);