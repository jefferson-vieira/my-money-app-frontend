import Modal from 'configs/swal';
import { toastr } from 'react-redux-toastr';

export function showSuccessToast(message) {
  return toastr.success(message);
}

export function showSuccessModal(message) {
  return Modal.fire({
    type: 'success',
    title: 'Pronto!',
    text: message
  });
}
