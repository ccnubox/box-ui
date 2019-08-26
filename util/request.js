const stream = require("@weex-module/stream");
const native = require("@weex-module/test");

function request(options) {
  let startTime = Date.now();
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
        // 请求时间打点
        native.reportInsightApiEvent(
          `${options.method} ${options.url}`,
          "timing",
          String(Date.now() - startTime)
        );
        if (ret.ok) {
          resolve(JSON.parse(ret.data));
        } else {
          reject(ret);
        }
      });
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // 请求时间打点
        native.reportInsightApiEvent(
          `${options.method} ${options.url}`,
          "timeout",
          String(Date.now() - startTime)
        );
        reject("请求超时");
      }, options.timeout || 5000);
    })
  ]);
}

export default request;
