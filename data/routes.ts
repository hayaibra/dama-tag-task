const ROUTES = {
  home: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",
  posts: (id: string | number) => (id ? `/posts/${id}` : ""),
};
export default ROUTES;
