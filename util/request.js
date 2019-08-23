const stream = require("@weex-module/stream");

function request(options) {
  let requestOptions = {
    method: options.method,
    url: options.url
  };

  if (options.method === "POST") {
    requestOptions.headers = {
      "Content-Type": "application/json"
    };
    requestOptions.body = options.body;
  }
  if (options.headers) {
    requestOptions.headers = options.headers;
  }

  return Promise.race([
    new Promise((resolve, reject) => {
      stream.fetch(requestOptions, ret => {
        if (ret.ok) {
          resolve(JSON.parse(ret.data));
        } else {
          reject(ret);
        }
      });
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("请求超时");
      }, options.timeout || 5000);
    })
  ]);
}

export default request;