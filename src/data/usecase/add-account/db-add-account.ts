import { AddAcount, AddAcountModel  } from '../../../domain/usecases/add-acount'
import { AccountModel  } from '../../../domain/models/account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAcount {
  private readonly encrypter: Encrypter

  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter
  }
  async add(account: AddAcountModel): Promise<AccountModel> {
      await this.encrypter.encrypt(account.password)
      return new Promise(resolve => resolve(null))
  }
}
