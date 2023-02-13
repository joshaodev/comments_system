import { CommentContainer } from "./style";

function Comment({ comment, commentIndex, deleteComment }) {
  const handleClick = () => {
    deleteComment(commentIndex);
  };

  return (
    <CommentContainer>
      <p>
        Autor: <span>{comment.user}</span>
      </p>
      <p>{comment.content}</p>
      <a href="#" onClick={handleClick}>
        Excluir
      </a>
    </CommentContainer>
  );
}

export default Comment;
