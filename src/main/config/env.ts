export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://admin:<Casemods13@>@cluster0.4sv9w.mongodb.net/v1?retryWrites=true&w=majority',
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H'
}
