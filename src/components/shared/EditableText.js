import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'effector-react';
import parse from 'html-react-parser';

import { useEditable } from './useEditable';
import { editables, updateEditable } from '../../store/editables';

const EditableText = ({ editableId, value = '', children, handleSave }) => {
  const [
    editableValue,
    changedValue,
    isEditing,
    isSaving,
    setChangedValue,
    edit,
    save,
    cancel
  ] = useEditable(editableId, value, handleSave);

  const childrenWithText = React.cloneElement(children, {
    children: parse(editableValue)
  });

  const onInputKeyUp = (e) => {
    const enterKeyCode = 13;

    if (e.keyCode === enterKeyCode) {
      save();
    }
  };

  return (
    <>
      {childrenWithText}
      {!isEditing && !isSaving && <button onClick={edit}>Edit</button>}
      {isEditing && !isSaving && (
        <>
          <input type="text" value={changedValue} onChange={(e) => setChangedValue(e.target.value)} onKeyUp={onInputKeyUp} />
          <button onClick={save}>Save</button>
          <button onClick={cancel}>Cancel</button>
        </>
      )}
      {isSaving && <span>Saving</span>}
    </>
  );
};

EditableText.propTypes = {
  editableId: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  handleSave: PropTypes.func
};

const Enchanced = createComponent(editables, (props, state) => {
  const concreteEditable = state.find((x) => x.id === props.editableId);

  return (
    <EditableText
      value={concreteEditable.value}
      handleSave={(editableId, value) => updateEditable({ editableId, newValue: value })}
      editableId={concreteEditable.id}
    >
      {props.children}
    </EditableText>
  );
});

export { Enchanced as EditableText };
