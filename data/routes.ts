const ROUTES = {
  signIn: "/sign-in",
  signUp: "/sign-up",
  posts: (id: string) => (id ? `/posts/${id}` : ""),
};
export default ROUTES;
