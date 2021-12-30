import { atom } from "recoil";

const confirmStore = atom({
  key: '@confirm',
  default: { show: false, data: {idx: -1, close: () => {}, API: () => {} } }
})