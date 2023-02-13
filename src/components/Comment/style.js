import styled from "styled-components";

export const CommentContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px 20px;
  margin-bottom: 10px;

  p {
    margin: 5px;
  }

  p span {
    font-weight: bold;
  }

  button {
    background-color: #fb3b1e;
    margin-top: 15px;
  }

  button:hover {
    background-color: #df2c14;
  }
`;
