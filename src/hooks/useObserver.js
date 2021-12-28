import { useEffect, useRef } from 'react'

export const useObserver = (isLoading, observeElement, condition, cb) => {
  const observer = useRef();

  useEffect(() => {
    if(isLoading) return;
    if(observer.current) observer.current.disconnect();

    const callback = (entries) => {
      if(entries[0].isIntersecting && condition) {
        cb();
      }
    }

    observer.current = new IntersectionObserver(callback);
    observer.current.observe(observeElement.current);

  }, [isLoading])
}