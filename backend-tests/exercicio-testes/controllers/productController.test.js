const productController = require("./productController");

describe("test productsController", () => {
    test("pega todos os produtos cadastrados", async () => {
        const res = await productController.getAllProducts()
        console.log(res);
        
        expect(res.status).to.equal(200);
  });
})