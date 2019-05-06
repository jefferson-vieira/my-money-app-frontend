import Modal from 'configs/swal';

export function showConfirmModal(message) {
  return Modal.fire({
    type: 'question',
    title: 'Mas antes...',
    text: message,
    confirmButtonText: 'Sim',
    showCancelButton: true,
    cancelButtonText: 'Não'
  });
}
