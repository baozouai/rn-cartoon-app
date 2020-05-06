import styled from 'styled-components/native';
import { pxSize } from '../../../../util';
const ItemWrapper = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
`;
const ImgWrapper = styled.View`
    align-items: center;
    margin-top: 10px;
`;
const Image = styled.Image`
    width: ${pxSize(350)}px;
    height: ${pxSize(400)}px;
`;
const TextWrapper = styled.View`
    padding: 10px 15px 0;
`;
const Title = styled.Text`
    font-size: 14px;
    font-weight: bold;
    margin-top: 3px;
`;
const Brief = styled.Text`
    margin-top: 5px;
`;
export {
    ItemWrapper,
    ImgWrapper,
    Image,
    TextWrapper,
    Title,
    Brief,
}