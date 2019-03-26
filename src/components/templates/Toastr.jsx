import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import React from 'react';
import ReduxToastr from 'react-redux-toastr';

export default () => (
  <ReduxToastr
    timeOut={4000}
    newestOnTop={false}
    preventDuplicates={true}
    position="bottom-right"
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar={true}
  />
);
