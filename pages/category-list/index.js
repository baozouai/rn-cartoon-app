import React, {
    memo,
} from 'react';
import {
    SafeAreaView,
    Text,
} from 'react-native';
import { baseImgUrl } from '../constants';


function Index(props) {

    return (
        <SafeAreaView>
            <Text>category-list</Text>
        </SafeAreaView>
    )
};

export default memo(Index);