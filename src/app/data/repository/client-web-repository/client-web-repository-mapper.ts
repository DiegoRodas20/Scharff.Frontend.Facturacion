import { ClientWebEntity } from './client-web-entity';
import { ClientModel } from '../../../core/domain/client.model';
import { Mapper } from '../../../core/base/mapper';

export class ClientWebRepositoryMapper extends Mapper <ClientWebEntity, ClientModel> {
  mapFrom(param: ClientWebEntity): ClientModel {
    return {
      name: param.name,
      family: param.family,
      birthday: new Date(param.birthday)
    };
  }

  mapTo(param: ClientModel): ClientWebEntity {
    return {
      id: 0,
      name: param.name,
      family: param.family,
      birthday: param.birthday.getTime()
    };
  }
}
