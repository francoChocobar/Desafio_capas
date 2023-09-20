export class productsService {
    static getProducts = async ()=> {
        return  await productsDao.get();
    };
    static createProduct = async ()=> {
        return await productsDao.save(productInfo);
    };
}

