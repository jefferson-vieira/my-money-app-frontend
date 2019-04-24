import Modal from 'configs/swal';
import { toastr } from 'react-redux-toastr';

export function showErrorModal(error, retry = false) {
  return Modal.fire({
    type: 'error',
    title: '<p>Ops...</p>',
    text: handleError(error),
    confirmButtonColor: '#00c689',
    confirmButtonText: retry ? 'Tentar novamente' : 'OK',
    allowOutsideClick: !retry,
    allowEscapeKey: !retry
  });
}

export function showErrorToast(error) {
  return toastr.error('Ops...', handleError(error));
}

function handleError(error) {
  if (typeof error === 'string') return error;
  if (typeof error === 'number') return getMessageErrorByStatus(error);

  const { response } = error || {};
  const { data: { message }, status } = response || {};
  if (typeof message === 'string') return message;

  return getMessageErrorByStatus(status);
}

function getMessageErrorByStatus(status) {
  switch (status) {
    case 400:
      return 'Está preenchendo tudo certinho?';
    case 401:
      return 'Não foi possível autenticar o seu usuário!'
    case 403:
      return 'Você não tem permissões suficientes!';
    case 404:
      return 'Não encontramos o conteúdo que você estava procurando!';
    case 500:
      return 'Houve um erro que nos impediu de completar sua solicitação!';
    case 503:
      return 'Não foi possível se comunicar com o servidor. Tente novamente mais tarde!';
    default:
      return 'Um erro inesperado ocorreu. Tente novamente mais tarde!';
  }
}
