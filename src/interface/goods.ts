interface Goods {
    price: number | string, 
    pname: string,
    number: number,
    productDate: string ,
    msg: object | any [],
    discountPrice ?: number | string,
    isDiscount ?: number | string | boolean,
    isFreeSend ?: number | string | boolean
}

export default Goods