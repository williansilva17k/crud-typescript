import { AddAcountModel } from '../../domain/usecases/add-acount'
import { AccountModel } from '../../domain/models/account'

export interface AddAccountRepository {
  add (accountData: AddAcountModel): Promise<AccountModel>
}
