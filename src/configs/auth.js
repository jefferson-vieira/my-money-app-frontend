import { initAuthInterceptor } from 'utils/auth';
import http from 'utils/http';

initAuthInterceptor(http);
