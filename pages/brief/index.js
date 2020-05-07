import React, {
  useState,
} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DetailDescription from './components/detail-description';
import Directory from './components/directory';
import { pxSize } from '../../util';

function Index(props) {

  const { navigation, } = props;
  const { state: { params: { book, uri } } } = navigation;
  const { bookTitle, type, anthor, brief } = book;
  const [tab, setTab] = useState(0);

  const tabs = [
    {
      title: '详情',
      component: <DetailDescription brief={brief} />
    },
    {
      title: '目录',
      component: <Directory />
    }
  ]
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* header start */}
      <View style={styles.header}>
        <Text style={styles.return} onPress={() => navigation.goBack()}>&lt; 返回</Text>
        <Text style={styles.title}>{bookTitle}</Text>
      </View>
      {/* header end */}
      {/* cover start */}
      <View style={styles.coverWrapper}>
        <Image
          blurRadius={8}
          style={styles.backgroundCover}
          source={{ uri }}
          resizeMode="cover"
        />
        <View style={styles.cover}>
          <Image
            source={{ uri }}
            style={styles.bookCover}
          />
          <View style={styles.coverDescription}>
            <Text style={styles.coverTitle}>{bookTitle}</Text>
            <Text style={[styles.textColor, styles.coverType]}>漫画类型：{type}</Text>
            <Text style={[styles.textColor, styles.coverAuthor]}>漫画作者：{anthor}</Text>
          </View>
        </View>
      </View>
      {/* header end */}
      {/* tab start */}
      <View style={styles.tabWrapper}>
        {
          tabs.map((item, index) => {
            const { title } = item;
            const props = {
              style: styles.tab,
              key: title,
              onPress: () => setTab(index)
            }
            return (<TouchableOpacity {...props}><Text>{title}</Text></TouchableOpacity>)
          })
        }
      </View>
      {tabs[tab].component}
      {/* tab end */}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  wrapper: {

  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 40,
  },
  return: {
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  coverWrapper: {
    width: '100%',
  },
  backgroundCover: {
    width: '100%',
    height: pxSize(400),
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: .5,
  },
  cover: {
    height: pxSize(400),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  bookCover: {
    width: pxSize(252),
    height: pxSize(336)
  },
  coverDescription: {
    height: pxSize(336),
    paddingLeft: 30,
  },
  coverTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20
  },
  coverType: {
    paddingBottom: 10,
  },
  textColor: {
    color: '#333'
  },
  tabWrapper: {
    flexDirection: 'row',
    height: 40,
    borderBottomWidth: 1,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default Index;