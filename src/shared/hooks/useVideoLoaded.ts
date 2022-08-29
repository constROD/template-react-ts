import { useState, useRef } from 'react';
import { useEffectOnce } from 'react-use';

export const useVideoLoaded = () => {
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLVideoElement | null>(null);

  const handleCanPlay = () => {
    setLoading(false);
  };

  useEffectOnce(() => {
    if (ref.current) {
      if (ref.current.readyState >= 3) return handleCanPlay();
      ref.current.oncanplay = handleCanPlay;
    }
  });

  return {
    ref,
    loading,
  };
};
