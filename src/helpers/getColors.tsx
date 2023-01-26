import ImageColors from 'react-native-image-colors';

export const getImageColors = async( uri: string ) => {
    
    const colors = await ImageColors.getColors(uri, {fallback: '#75CEDB',
    quality: 'high',});

    let primary;
    let secondary;
    
    if (colors.platform === "android") {
        // Access android properties
        primary = colors.dominant;
        secondary = colors.average;
    }else if (colors.platform === 'ios') {
        primary = colors.primary;
        secondary = colors.secondary;
      }

    return [primary, secondary]
}