import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { pxSize } from '../../util';
import { baseImgUrl } from '../constants';
function Index(props) {

    const {
        navigation
    } = props;
    const categories = [
        '爆笑喜剧',
        '少年热血',
        '武侠格斗',
        '少女爱情',
        '恐怖灵异',
        '侦探推理',
        '科幻魔幻',
        '竞技体育',
        '其它漫画'
    ];

    function renderItem(category, index) {
        const wrapperProps = {
            key: category,
            onPress: () => navigation.navigate('CategoryList', { category, }),
        }
        const uri = `${baseImgUrl}cate${index + 1}.jpg`;
        const imgProps = {
            style: styles.category,
            source: { uri },
            borderRadius: 10,
        };

        return (
            <TouchableOpacity {...wrapperProps}>
                <View style={styles.categoryWrapper}>
                    <Image {...imgProps} />
                    <Text style={styles.text}>{category}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.wrapper}>
            {categories.map(renderItem)}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
    },
    categoryWrapper: {
        width: pxSize(750 / 3),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    category: {
        width: pxSize(180),
        height: pxSize(180),
    },
    text: {
        padding: 10,
    }
})
export default Index;