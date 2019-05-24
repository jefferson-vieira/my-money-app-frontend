import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Modal = withReactContent(
  Swal.mixin({
    confirmButtonColor: '#00c689',
    cancelButtonColor: '#dc3545',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  })
);

export default Modal;
