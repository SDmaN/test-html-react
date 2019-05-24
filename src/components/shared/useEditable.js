import { useState } from 'react';

export const useEditable = (editableId, sourceValue, handleSave) => {
  const [editableValue, setEditableValue] = useState(sourceValue);
  const [changedValue, setChangedValue] = useState(sourceValue);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const edit = () => setIsEditing(true);

  const save = () => {
    setIsSaving(true);

    handleSave(editableId, changedValue)
      .then((v) => {
        setEditableValue(v);
        setIsEditing(false);
        setIsSaving(false);
      })
      .catch((e) => {
        setIsSaving(false);
        alert(e.message);
      });
  };

  const cancel = () => {
    setChangedValue(editableValue);
    setIsEditing(false);
  };

  return [editableValue, changedValue, isEditing, isSaving, setChangedValue, edit, save, cancel];
};
