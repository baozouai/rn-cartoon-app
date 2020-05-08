/*
 * @Description: 头部栏
 * @Author: Moriaty
 * @Date: 2020-05-07 20:44:22
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-05-08 09:04:54
 */
import React, { memo } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function Index(props) {
  const {
    navigation,
    title,
  } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.return} onPress={() => navigation.goBack()}>&lt; 返回</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    
  },
  return: {
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
  },
})
export default memo(Index);