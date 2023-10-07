import { atom } from "recoil";

export const CameraCapturedImg = atom<string[]>({
  key: "cameraCapturedImg",
  default: [],
});
