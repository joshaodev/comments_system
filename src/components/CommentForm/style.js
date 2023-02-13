import styled from "styled-components";

export const CommentFormContainer = styled.div`
  width: 100%;

  form .input-block {
    margin-bottom: 10px;
  }

  form .input-block input,
  form .input-block textarea {
    width: 100%;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ddd;
    outline: none;
  }

  form button {
    padding: 10px 25px;
    background-color: #1870d5;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  form button:hover {
    background-color: #1357a6;
  }
`;
