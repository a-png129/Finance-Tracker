// TEMPORARY middleware to simulate authentication

export function fakeAuth(req, res, next) {
  req.user = { id: 1 }; // pretend user 1 is logged in
  next();
}
