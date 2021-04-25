export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/V1',
  port: process.env.PORT || 8080,
  //jwtSecret: process.env.JWT_SECRET || 'tj67O==5H'
}
