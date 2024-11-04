import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Icons = props => {
  const { iconName, color, width, height, onPress, style } = props;

  switch (iconName) {
    case 'Anasayfa':
      return (
        <TouchableOpacity style={style} onPress={onPress} disabled={!onPress}>
          <Svg
            width={width ?? '16'}
            height={height ?? '16'}
            viewBox='0 0 18 18'
            fill='none'
          >
            <Path
              d='M12.0836 3.24573L16.2935 6.69137C17.2273 7.45572 17.6683 8.67077 17.4413 9.85577L16.4889 14.826C16.1923 16.3758 14.8362 17.4968 13.258 17.4968H6.74123C5.16308 17.4968 3.80785 16.3758 3.51038 14.826L2.55879 9.85577C2.33184 8.67077 2.77197 7.45572 3.70572 6.69137L7.91652 3.24573C9.12825 2.25362 10.8718 2.25362 12.0836 3.24573Z'
              stroke={color ?? '#C1C8CD'}
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <Path
              d='M7.83041 17.4971V14.7097C7.83041 13.5109 8.80226 12.5391 10.0011 12.5391C11.1998 12.5391 12.1717 13.5109 12.1717 14.7097V17.4971'
              stroke={color ?? '#C1C8CD'}
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'Kartlar':
      return (
        <TouchableOpacity style={style} onPress={onPress} disabled={!onPress}>
          <Svg
            width={width ?? '21'}
            height={height ?? '20'}
            viewBox='0 0 21 20'
            fill='none'
          >
            <Path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M18.1932 6.40796C18.1932 4.08046 16.6982 2.5163 14.4732 2.5163H6.08068C3.85568 2.5163 2.36151 4.08046 2.36151 6.40796V6.47463C2.36151 6.6127 2.47344 6.72463 2.61151 6.72463H17.9432C18.0812 6.72463 18.1932 6.6127 18.1932 6.47463V6.40796Z'
              fill={color ?? '#E13915'}
            />
            <Path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M10.0437 12.4261L11.0687 10.5927C11.4353 9.93442 12.1353 9.52608 12.8853 9.52608H16.9853C17.2599 9.52608 17.5248 9.58083 17.77 9.68225C17.9578 9.76 18.1937 9.63525 18.1937 9.43192V8.22607C18.1937 8.088 18.0818 7.97607 17.9437 7.97607H2.61035C2.47228 7.97607 2.36035 8.088 2.36035 8.22607V11.8927C2.36035 14.2177 3.85202 15.7844 6.07702 15.7844H10.6059C10.8226 15.7844 10.9367 15.5276 10.7914 15.3668L10.3103 14.8344C9.71867 14.1761 9.61034 13.2011 10.0437 12.4261Z'
              fill={color ?? '#E13915'}
            />
            <Path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M14.9386 15.9251L12.6253 13.3568L13.2536 12.2343H16.6228L17.2511 13.3568L14.9386 15.9251ZM18.5603 13.1368L17.5344 11.3043C17.4244 11.1068 17.2153 10.9843 16.9894 10.9843H12.8869C12.6611 10.9843 12.4519 11.1068 12.3419 11.3043L11.3161 13.1368C11.1853 13.371 11.2178 13.661 11.3969 13.8601L14.4744 17.2776C14.5928 17.4093 14.7619 17.4843 14.9386 17.4843C15.1153 17.4843 15.2844 17.4093 15.4036 17.2776L18.4803 13.8601C18.6586 13.661 18.6911 13.371 18.5603 13.1368Z'
              fill={color ?? '#E13915'}
            />
          </Svg>
        </TouchableOpacity>
      );
    case 'Profil':
      return (
        <TouchableOpacity style={style} onPress={onPress} disabled={!onPress}>
          <Svg
            width={width ?? '20'}
            height={height ?? '20'}
            viewBox='0 0 20 20'
            fill='none'
          >
            <Path
              d='M9.44219 12.3958C6.62935 12.3958 4.23016 12.8211 4.23016 14.5233C4.23016 16.2256 6.61566 16.6659 9.44219 16.6659'
              stroke={color ?? '#C1C8CD'}
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <Path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M12.7717 6.66292C12.7717 8.5014 11.2814 9.99256 9.44216 9.99256C7.60367 9.99256 6.11328 8.5014 6.11328 6.66292C6.11328 4.82443 7.60367 3.33331 9.44216 3.33331C11.2814 3.33331 12.7717 4.82443 12.7717 6.66292Z'
              stroke={color ?? '#C1C8CD'}
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <Path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M11.7774 14.4298C11.5331 13.6658 11.8185 12.7938 12.6199 12.5358C13.0415 12.401 13.5028 12.4781 13.8566 12.744C14.2112 12.481 14.6703 12.4032 15.0919 12.5358C15.8926 12.7938 16.1809 13.6658 15.9365 14.4298C15.556 15.6391 13.8566 16.5717 13.8566 16.5717C13.8566 16.5717 12.1709 15.6535 11.7774 14.4298Z'
              stroke={color ?? '#C1C8CD'}
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </Svg>
        </TouchableOpacity>
      );

    default:
      break;
  }
};

export default Icons;
