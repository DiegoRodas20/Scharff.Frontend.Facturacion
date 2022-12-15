import { ClientModel } from '../../../core/domain/client.model';
import { Mapper } from '../../../core/base/mapper';
import { ClientMockEntity } from './client-mock-entity';

export class ClientMockRepositoryMapper extends Mapper <ClientMockEntity, ClientModel> {
  mapFrom(param: ClientMockEntity): ClientModel {
    return {
      name: param.name,
      family: param.family,
      birthday: new Date(param.birthday)
    };
  }

  mapTo(param: ClientModel): ClientMockEntity {
    return {
      id: 0,
      name: param.name,
      family: param.family,
      birthday: param.birthday.getTime()
    };
  }
}
