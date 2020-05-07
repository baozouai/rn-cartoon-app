import React, {
    useRef,
} from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {
    ListView,
} from '@ant-design/react-native';
import {
    getArticleList
} from '../../service';
import {
    onFetch as fetchData
} from '../../../../util';
function Index(props) {
    const {
        book
    } = props;
    const { bookTitle } = book;
    const isFetchRef = useRef(false);


    const listViewProps = {
        onFetch: (page, startFetch, abortFetch) => {
            if (!isFetchRef.current) {
                fetchData(page, startFetch, abortFetch, () => getArticleList(bookTitle));
                isFetchRef.current = true;
            }
        },
        keyExtractor: item => item._id,
        renderItem,
        numColumns: 3,
        style: {
            paddingBottom: 200
        }
    }
    function renderItem(item) {

        const { articleNum } = item;
        return (
            <TouchableOpacity style={styles.numWrapper} key={articleNum}>
                <Text style={styles.section}>{articleNum}</Text>
            </TouchableOpacity>
        )
    }
    return (

        <ListView
            {...listViewProps}
        />
    )
};
const styles = StyleSheet.create({
    numWrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    section: {
        padding: 10,
        borderWidth: 1,
    }
})
export default Index;