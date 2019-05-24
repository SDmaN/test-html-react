import React from 'react';

import { HtmlTemplate } from '../components/shared/HtmlTemplate';

export const Home = () => {
  const html = '<div data-editable-text="1"></div>';

  return (
    <div>
      <HtmlTemplate html={html} />
    </div>
  );
};
