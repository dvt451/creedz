import { useState, useEffect } from 'react';

const useScreenSize = (maxWidth) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    // Установка состояния на основе текущего состояния медиа-запроса
    setIsMatch(mediaQuery.matches);

    // Можно добавить логику, если нужно следить за изменениями
    // Но как обсуждалось ранее, без `resize`
  }, [maxWidth]); // Следим за изменением maxWidth

  return isMatch;
};

export default useScreenSize;
