import { atom, useRecoilState } from 'recoil'

const toastStore = atom({
  key: '@toast',
  default: { show: false, content : '' } 
});

const useToast = () => useRecoilState(toastStore);
export default useToast;
