import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AddAcountModel } from '../../../../domain/usecases/add-acount'
import { AccountModel } from '../../../../domain/models/account'
import { MongoHelper } from '../helper/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAcountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    return MongoHelper.map(result.ops[0])
  }
}
