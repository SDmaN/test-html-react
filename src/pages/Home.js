import React from 'react';

import { HtmlTemplate } from '../components/shared/HtmlTemplate';

export const Home = () => {
  const html =
    `<div data-editable-text="1"></div><br />
    <div><button data-editable-text="2"></button><div><br />
    <div><a href="https://linguatrip.com/" target="_blank" data-editable-text="3"></a></div>`;

  return (
    <div>
      <HtmlTemplate html={html} />
    </div>
  );
};
