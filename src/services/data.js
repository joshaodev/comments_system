export const getComments = () => {
  const allComments = localStorage.getItem("comments")
    ? JSON.parse(localStorage.getItem("comments"))
    : [];
  return allComments;
};

export const setComment = (comment) => {
  let allComments = getComments();
  allComments.push(comment);
  localStorage.setItem("comments", JSON.stringify(allComments));
};

export const removeComment = (commentIndex) => {
  let allComments = getComments();
  allComments = allComments.filter((item, index) => index !== commentIndex);
  localStorage.setItem("comments", JSON.stringify(allComments));
};
