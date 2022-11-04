import { useState, useRef, useEffect, useMemo } from 'react';

export const useImageLoaded = () => {
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLImageElement | null>(null);

  const onLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return useMemo(
    () => ({
      ref,
      loading,
      onLoad,
    }),
    [loading]
  );
};
