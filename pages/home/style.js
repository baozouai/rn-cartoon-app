import styled from 'styled-components/native';

const SafeAreaView = styled.SafeAreaView`
    flex: 1;
`;

const CarouselImageView = styled.View`
    flex-grow: 1;
    align-items: center;
    justify-content: center;

`;

const CarouselImage = styled.Image`
    height: 200px;
    width: 100%;
`;
export {
    SafeAreaView,
    CarouselImageView,
    CarouselImage,
}