import { toastr } from 'react-redux-toastr';

export function showInfoToast(message) {
  return toastr.info(message);
}
