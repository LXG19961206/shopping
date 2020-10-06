/**
 * @interface 商品字段的interface
 * @param class 商品归属的类别
 * @param subClass 商品归属的二级类别
 * @param pid 商品唯一标识的id
 * @param pname 商品名
 * @param price 商品的价格
 * @param priceAfterDiscount 商品的折后价格
 * @param img 商品的图片列表
 * @param type 商品的细分特性类别
 * @param number 商品的库存量
 * @param isOfferSend 是否包邮
 * @param isDiscount 是否打折
 * @param isHot 是否热销
 * 
 */

interface Goods {
    class: string,
    subClass: string,
    pid: string|number,
    pname: string,
    price: number,
    priceAfterDiscount: number,
    img: string [],
    type?: string [],
    number?: number,
    isOfferSend?: boolean,
    isDiscount?: boolean,
    isHot?: boolean,
}

export default Goods