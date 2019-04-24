import Modal from 'configs/swal';

export function showConfirmModal(message) {
  return Modal.fire({
    type: 'question',
    title: 'Mas antes...',
    text: message,
    confirmButtonColor: '#00c689',
    confirmButtonText: 'Sim',
    showCancelButton: true,
    reverseButtons: true,
    cancelButtonColor: '#dc3545',
    cancelButtonText: 'Não'
  });
}
