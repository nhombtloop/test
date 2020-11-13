import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
function DemoUseTransition() {
  const [articles, setArticles] = useState([
    {
      title: 'React.js',
      type: 'library',
      id: 1,
    },
    {
      title: 'Vue.js',
      type: 'framework',
      id: 2,
    },
    {
      title: 'angular',
      type: 'framework',
      id: 3,
    },
  ]);
  const [article, setArticle] = useState({
    title: '',
    type: '',
  });
  const handleChange = (e) => {
    let { value, name } = e.target;
    setArticle({
      ...article,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    let newItem = {
      ...article,
      id: Date.now(),
    };
    setArticles([...articles, newItem]);
  };
  const handleDelete = (id) => {
    setArticles([...articles.filter((article) => article.id !== id)]);
  };
  const propTransitions = useTransition(articles, (item) => item.id, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: {
      transform: 'translate3d(0,0px,0)',
      opacity: 1,
      width: '100%',
      height: '100%',
    },
    leave: {
      transform: 'translate3d(0,-40px,0)',
      opacity: 0,
      width: '100%',
      height: '0%',
    },
    config: { duration: 700 },
  });
  const renderArticle = () => {
    return propTransitions.map(({ item, props, key }) => (
      <animated.div
        className="bg-dark p-3 my-2 text-white"
        style={props}
        key={key}
      >
        <div className="text-right">
          <button
            onClick={() => handleDelete(item.id)}
            className="btn btn-danger"
          >
            X
          </button>
        </div>
        <h1>{item.title}</h1>
        <p>{item.type}</p>
      </animated.div>
    ));
  };
  return (
    <div className="container">
      {renderArticle()}
      <div className="form-group">
        <h3>Title</h3>
        <input onChange={handleChange} className="form-control" name="title" />
      </div>
      <div className="form-group">
        <h3>Type</h3>
        <input onChange={handleChange} className="form-control" name="type" />
      </div>
      <div className="form-group">
        <button onClick={handleSubmit} className="btn btn-success">
          add article
        </button>
      </div>
    </div>
  );
}

export default DemoUseTransition;
