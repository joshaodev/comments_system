import Comment from "../Comment";
import CommentForm from "../CommentForm";

import { CommentsContainer } from "./style";

function Comments({ comments, addComment, deleteComment }) {
  return (
    <CommentsContainer>
      <h1>Comments</h1>
      <hr />
      <CommentForm addComment={addComment} />
      <hr />
      {comments.length === 0 ? (
        <p>No Comments ...</p>
      ) : (
        comments.map((comment, index) => (
          <Comment
            key={index}
            comment={comment}
            commentIndex={index}
            deleteComment={deleteComment}
          />
        ))
      )}
    </CommentsContainer>
  );
}

export default Comments;
