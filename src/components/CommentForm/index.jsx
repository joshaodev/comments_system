import { useState } from "react";
import { CommentFormContainer } from "./style";

function CommentForm({ addComment }) {
  const [comment, setComment] = useState({
    user: "",
    content: "",
  });

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.user === "") {
      comment.user = "Anónimo";
    }

    addComment(comment);
    clearFields();
  };

  const clearFields = () => {
    setComment({
      user: "",
      content: "",
    });
  };

  return (
    <CommentFormContainer>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <input
            type="text"
            name="user"
            id="user"
            placeholder="User"
            value={comment.user || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-block">
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            placeholder="Comment..."
            required
            value={comment.content || ""}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Comment</button>
      </form>
    </CommentFormContainer>
  );
}

export default CommentForm;
