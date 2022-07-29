import { Text, View, useWindowDimensions } from 'react-native';

export const Dim = () => {
    const screenWidth = Math.round(useWindowDimensions().width);
    const screenHeight = Math.round(useWindowDimensions().height);
    console.log(`Width: ${screenWidth}********************`);
    console.log(`Height: ${screenHeight}********************`);

    return (
        <View>
            <Text>
                Width: {screenWidth}
            </Text>
            <Text>
                Height: {screenHeight}
            </Text>
        </View>
    );
};

export default Dim;