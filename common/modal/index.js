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
