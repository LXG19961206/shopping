import Goods from '../interface/goods'


interface Phone extends Goods {
  brand: string,
  isAndriod ?: boolean,
  isIOS ?: boolean,
  feature: {
    ram: string,
    cpu: string,
    screen: string,
    storage: string,
    graphics: string,
    others ? :object | Array<any>
  }
}