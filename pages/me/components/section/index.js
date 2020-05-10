import React, { memo } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

function Index(props) {

  const { section } = props;

  function renderItem(props) {
    const { image, title, subtitle, onPress = () => { } } = props;
    const itemProps = {
      style: styles.itemWrapper,
      key: title,
      onPress,
    }
    return (
      <TouchableOpacity {...itemProps}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.icon} source={image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Image style={styles.arrowRight} source={require('../../../../assets/img/cell_arrow.png')} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.wrapper}>
      {section.map(renderItem)}
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  title: {
    fontSize: 14,
    color: '#222222',
  },
  subtitle: {
    color: '#999'
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  arrowRight: {
    width: 14,
    height: 14,
    marginLeft: 5,
  }
})
export default memo(Index);