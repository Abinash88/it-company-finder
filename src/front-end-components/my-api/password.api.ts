import {
  ResponseGetPasswordTypes,
  ResponseMessageDataTypes,
} from '@/Data/interfaces/password.interface';
import { PATH } from '@/lib/api-services/routes-path';
import { fetchRequest } from '@/lib/fetch';
import { headerServices } from '@/lib/helper';

export const getPasswords = (token: string | undefined) =>
  fetchRequest<object, ResponseMessageDataTypes<ResponseGetPasswordTypes[]>>({
    url: PATH.GET_PASSWORD,
    headers: headerServices(token),
    popup: false,
    method: 'GET',
  });
