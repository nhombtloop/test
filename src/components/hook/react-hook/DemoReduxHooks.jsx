import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import produce from 'immer';
import { addComment } from '../../../redux/actions/fakebook.action';

const DemoReduxHooks = () => {
  const comments = useSelector((state) => state.fakebookReducer.comments);
  const [userComment, setUserComment] = useState({
    name: '',
    content: '',
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserComment(
      produce(userComment, (draft) => {
        draft[name] = value;
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addComment({
        ...userComment,
        avatar: `https://api.adorable.io/avatars/285/${userComment.name}`,
      })
    );
    setUserComment(
      produce(userComment, (draft) => {
        draft.name = '';
        draft.content = '';
      })
    );
  };
  return (
    <div className="container">
      <h3>Fakebook App!</h3>
      <div className="card text-left">
        <div className="card-header">
          {comments.map((comment, index) => (
            <div className="row" key={index}>
              <div className="col-1">
                <img src={comment.avatar} style={{ height: 60 }} alt="a" />
              </div>
              <div className="col-10">
                <h6 className="text-danger">{comment.name} </h6>
                <p>{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input
              className="form-control"
              name="name"
              onChange={handleChange}
              value={userComment.name}
            />
          </div>
          <div className="form-group">
            <h4 className="card-title">Content</h4>
            <input
              className="form-control"
              name="content"
              onChange={handleChange}
              value={userComment.content}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoReduxHooks;
