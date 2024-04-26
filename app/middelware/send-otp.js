var unirest = require("unirest");

var req = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

req.query({
  authorization: "U69QoFPjpLydd3W20H2cqa4drVDLB9IFVnVMhA9R6lEUB8sBHQfzb6DWhCD4",
  variables_values: "5599",
  route: "otp",
  numbers: "9999999999,8888888888,7777777777",
});

req.headers({
  "cache-control": "no-cache",
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
