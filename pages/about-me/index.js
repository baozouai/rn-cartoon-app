import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import Header from '../components/header';

function Index(props) {

  const {
    navigation
  } = props;
  const headerProps = {
    title: '关于我',
    navigation,
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header {...headerProps} />
      <View style={styles.body}>
        <View style={styles.description}>
          <View>
            <Text style={styles.text}> 致疯狂的人：</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>   他们特立独行，他们桀骜不驯，他们惹事生非，他们格格不入，他们用与众不同的眼光看待事物。</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}> 他们不喜欢墨守成规。他们也不安于现状。你可以认同他们，反对他们，颂扬或是诋毁他们。但唯独不能漠视他们。因为他们改变了寻常事物。他们推动人类向前迈进。</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>  或许他们是别人眼里的疯子，但他们却是我们眼中的天才。因为只有那些疯狂到以为自己能够改变世界的人，才能真正改变世界。</Text>
          </View>
        </View>
        <Image style={{ width: 200, height: 200 }} source={require('../../assets/img/mine/avatar.gif')} />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eee',
  },
  body: {
    alignItems: 'center',
  },  
  description: {
    padding: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textWrapper: {
    paddingLeft: 15,
    paddingVertical: 5,
  },
  text: {

    color: '#999'
  }
})
export default Index;