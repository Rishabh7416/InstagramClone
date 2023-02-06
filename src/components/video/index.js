import Video from 'react-native-video';
import {useFocusEffect} from '@react-navigation/native';
import React, {useRef, useCallback, useState} from 'react';

export default function VideoPlayer() {
  const vidRef = useRef(null);
  const [status, setStatus] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setStatus(true);
      vidRef.current.seek(0);
      return () => setStatus(false);
    }, []),
  );

  const resetPlayer = value => {
    vidRef.current = value;
  };

  return (
    <Video
      ref={value => resetPlayer(value)}
      source={{
        uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
      }}
      style={{
        flex: 1,
      }}
      repeat={true}
      resizeMode={'cover'}
    />
  );
}
