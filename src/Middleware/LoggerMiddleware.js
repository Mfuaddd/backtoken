export const LoggerMiddleware = (req, res, next) => {
  res.on("finish", function () {
    console.log(
      new Date(Date.now()).toUTCString(),
      ": ",
      req.ip,
      ": ",
      req.method,
      req.baseUrl,
      res.statusCode,
      res.statusMessage
    );
  });
  next();
};
