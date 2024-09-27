export const apiEndpoints = {
  posts: (id?: string | number) => (id ? `/posts/${id}` : "/posts"),
};
