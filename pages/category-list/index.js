import React, {
    memo,
} from 'react';
import {
    SafeAreaView,
    Text,
} from 'react-native';
import Header from '../components/header';
import ListPage from '../components/list-page';
import {
    getCategoryList
} from './service';

function Index(props) {
    const {
        navigation,
    } = props;
    const { state: { params: { category } } } = navigation;
    const headerProps = {
        navigation,
        title: category,
    };
    const listProps = {
        navigation,
        category,
        service: getCategoryList
    };
    return (
        <SafeAreaView>
            <Header {...headerProps} />
            <ListPage {...listProps} />
        </SafeAreaView>
    )
};

export default memo(Index);