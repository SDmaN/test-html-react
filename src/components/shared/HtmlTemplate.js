import React from 'react';
import PropTypes from 'prop-types';
import parse, { domToReact } from 'html-react-parser';

import { EditableText } from './EditableText';

const editableTextAttribute = 'data-editable-text';

const handleHtml = (html) => {
  return parse(html, {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs[editableTextAttribute]) {
        const editableId = Number(domNode.attribs[editableTextAttribute]);
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
