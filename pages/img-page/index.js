import React, {
    useState,
    memo
} from 'react';
import {
    SafeAreaView,
    ScrollView,
    Image,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import Header from '../components/header';
import {
    baseImgUrl
} from '../constants';
import { pxSize } from '../../util';

const imgPath = `${baseImgUrl}/articleImg/`;

function Index(props) {

    const {
        navigation,
    } = props;
    const { state: { params: { book, article, articleList, index } } } = navigation;
    const { articleNum, imgListId } = article;
    const { bookTitle } = book;
    // 上一话
    const preArticle = index > 0 ? articleList[index - 1] : null;
    // 下一话
    const nextArticle = index !== articleList.length - 1 ? articleList[index + 1] : null;
    const headerProps = {
        title: `${bookTitle}--${articleNum}`,
        navigation,
    };
    // 底部导航 start
    const navProps = {
        book,
        articleList,
    }
    const bottomNav = [
        {
            title: '上一话',
            path: 'ImgPage',
            props: { ...navProps, index: index + 1, article: nextArticle, },
            show: nextArticle,
        },
        {
            title: '回到首页',
            path: 'RootPage',
            show: true,
        },
        {
            title: '下一话',
            path: 'ImgPage',
            props: { ...navProps, index: index - 1, article: preArticle, },
            show: preArticle
        }
    ];
    // 底部导航 end
    return (
        <SafeAreaView style={styles.wrapper}>
            <Header {...headerProps} />
            <ScrollView>
                {
                    imgListId.map(imgId => {
                        const imgProps = {
                            source: { uri: `${imgPath}${imgId}.jpg` },
                            style: styles.image,
                            key: imgId,
                            resizeMethod: "auto"
                        };
                        return <Image {...imgProps} />
                    })
                }
            </ScrollView>
            <View style={{ flexDirection: "row" }}>
                {bottomNav.map(item => {
                    const { path, title, show, props } = item;
                    const navProps = {
                        onPress: () => navigation.navigate(path, props),
                    }
                    return (
                        <View style={styles.navItem} key={title}>
                            {show && <TouchableOpacity {...navProps}><Text style={styles.navText}>{title}</Text></TouchableOpacity>}
                        </View>
                    )
                })}
            </View>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    image: {
        width: pxSize(750),
        // 图片大小800 * 1133
        height: pxSize(750 / 800 * 1133),
    },
    navItem: {
        flex: 1,
        alignItems: 'center'
    },
    navText: {
        padding: 10,
    }
})
export default memo(Index);