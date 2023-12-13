import React, { useEffect } from 'react';

function RedirectTo({to}) {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
}


export default RedirectTo;
