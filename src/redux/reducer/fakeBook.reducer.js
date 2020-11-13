import produce from 'immer';
import { add_comment } from '../types/type';
const initialState = {
  comments: [
    {
      name: 'Yone',
      content: 'hello yasuo',
      avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_comment: {
      return produce(state, (draft) => {
        draft.comments.push(action.comment);
      });
    }
    default:
      return { ...state };
  }
};
