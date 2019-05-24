import { createStore, createEvent, createEffect } from 'effector';

const updateEditableValue = createEvent('update editable value');
const resetEditables = createEvent('reset editables');

export const editables = createStore([{ id: 1, value: 'a' }])
  .on(updateEditableValue, (state, payload) => {
    const { editableId, newValue } = payload;

    const stateWithoutEditable = state.filter((x) => x.id !== editableId);
    const updatedEditable = {
      id: editableId,
      value: newValue
    };

    return [
      ...stateWithoutEditable,
      updatedEditable
    ];
  })
  .reset(resetEditables);

editables.watch((state) => {
  console.log('Editables changed:');
  console.log(state);
});

export const updateEditable = createEffect('update editable on server')
  .use((params) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(params.newValue), 1000); // mock of server work
    });
  });

updateEditable.done.watch(({ params }) => {
  updateEditableValue({ editableId: params.editableId, newValue: params.newValue });
});
