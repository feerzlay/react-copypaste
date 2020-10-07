import React from 'react';

import IMG_WEBDEV from './assets/webdev.svg';

export const Landing: React.FC = () => {
  const onClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (({} as any).fail());
  };

  return (
    <>
      <h1>react-copypaste</h1>
      <img src={IMG_WEBDEV} />
      <button onClick={onClick}>Broken button for Sentry exception test</button>
    </>
  );
};
