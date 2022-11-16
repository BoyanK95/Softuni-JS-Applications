export function showDetails(ctx) {
    console.log(ctx.params);
    ctx.render(`
    <h2>Product detauls</h2>
    <h2>${ctx.params.categoryId}</h2>
    <h2>${ctx.params.productId}</h2>
    
    `) 
}