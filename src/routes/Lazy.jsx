import React, { Suspense } from 'react';

import Loading from 'components/templates/Loading';

const Lazy = ({ children }) => (
  <Suspense fallback={<Loading show={true} />}>{children}</Suspense>
);

export default Lazy;
