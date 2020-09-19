import { useEffect } from 'react';
import { useRouter } from 'next/router';
import nprogress from 'nprogress';

export default function useProgress() {
  const router = useRouter();
  let nprogressTimeout: any;

  function handleChangeStart() {
    nprogressTimeout = setTimeout(() => {
      nprogress.start();
      nprogressTimeout = null;
    }, 100);
  }

  function handleChangeComplete() {
    if (nprogressTimeout) {
      clearTimeout(nprogressTimeout);
      nprogressTimeout = null;
    } else {
      nprogress.done();
    }
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleChangeStart);
    router.events.on('routeChangeComplete', handleChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleChangeStart);
      router.events.off('routeChangeComplete', handleChangeComplete);
    };
  }, []);
}
