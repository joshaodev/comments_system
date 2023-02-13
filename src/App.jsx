import { useEffect, useState } from "react";
import { getComments, setComment, removeComment } from "./services/data";

import Comments from "./components/Comments";

import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComment(comment);
    setComments([...comments, comment]);
  };

  const deleteComment = (commentIndex) => {
    removeComment(commentIndex);
    setComments(comments.filter((item, index) => index !== commentIndex));
  };

  useEffect(() => {
    setComments(getComments());
  }, []);

  return (
    <div className="app">
      <GlobalStyle />
      <Comments
        comments={comments}
        addComment={addComment}
        deleteComment={deleteComment}
      />
    </div>
  );
}

export default App;
