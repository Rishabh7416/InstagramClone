import Video from 'react-native-video';
import {useFocusEffect} from '@react-navigation/native';
import React, {useRef, useCallback, useState, useEffect} from 'react';

export default function VideoPlayer() {
  const vidRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentState, setCurrentState] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setCurrentState(true);
      if (Math.round(duration) > 0) {
        vidRef.current.seek(0);
      }
      return () => setCurrentState(false);
    }, [currentState]),
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
      // paused={true}
      repeat={true}
      onProgress={({currentTime}) => setDuration(currentTime)}
      resizeMode={'cover'}
    />
  );
}
