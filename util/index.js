export const parseSearchString = search => {
  let qd = {};
  search.split`&`.forEach(item => {
    let [k, v] = item.split`=`;
    v = v && decodeURIComponent(v);
    (qd[k] = qd[k] || []).push(v);
  });
  return qd;
};

export { default as request } from "./request";
