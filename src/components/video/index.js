import Video from 'react-native-video';
import {useFocusEffect} from '@react-navigation/native';
import React, {useRef, useCallback, useState, useEffect} from 'react';

export default function VideoPlayer() {
  const vidRef = useRef(null);
  const [duration, setDuration] = useState(0);

  useFocusEffect(
    useCallback(() => {
      if (Math.round(duration) > 0) {
        console.log('if');
        vidRef.current.seek(0);
      }
    }, []),
  );

  return (
    <Video
      ref={value => (vidRef.current = value)}
      source={{
        uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
      }}
      style={{
        flex: 1,
      }}
      repeat={true}
      onProgress={({currentTime}) => setDuration(currentTime)}
      resizeMode={'cover'}
    />
  );
}
