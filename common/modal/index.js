const modal = require("@weex-module/modal");

export const confirm = (message, okStr = "确定", cancelStr = "取消") => {
  return new Promise((resolve, reject) => {
    modal.confirm(
      {
        message,
        duration: 0.3,
        okTitle: okStr,
        cancelTitle: cancelStr
      },
      function(value) {
        if (value === okStr) {
          resolve(1);
        } else {
          reject(-1);
        }
      }
    );
  });
};

export const weexAlert = message => {
  return new Promise((resolve, reject) => {
    modal.alert(
      {
        message,
        duration: 0.3
      },
      function(value) {
        resolve(value);
      }
    );
  });
};