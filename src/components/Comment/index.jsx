import { CommentContainer } from "./style";

function Comment({ comment, commentIndex, deleteComment }) {
  const handleClick = () => {
    deleteComment(commentIndex);
  };

  return (
    <CommentContainer>
      <p>
        Author: <span>{comment.user}</span>
      </p>
      <p>{comment.content}</p>
      <button onClick={handleClick}>Delete</button>
    </CommentContainer>
  );
}

export default Comment;
