import React from 'react';
import PropTypes from 'prop-types';
import parse, { domToReact } from 'html-react-parser';

import { EditableText } from './EditableText';

const handleHtml = (html) => {
  return parse(html, {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs['data-editable-text']) {
        const editableId = Number(domNode.attribs['data-editable-text']);
        const el = domToReact([domNode]);
        return (
          <EditableText editableId={editableId}>
            {el}
          </EditableText>
        );
      }
    }
  });
};

export const HtmlTemplate = ({ html }) => {
  return (
    <>
      {handleHtml(html)}
    </>
  );
};

HtmlTemplate.propTypes = {
  html: PropTypes.string.isRequired
};
