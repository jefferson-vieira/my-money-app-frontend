import Modal from 'configs/swal';

export function showSuccessModal(message) {
  return Modal.fire({
    type: 'success',
    title: 'Pronto!',
    text: message,
    confirmButtonColor: '#00c689'
  });
}
