import { Comment, directionValue, Product, SortDirection } from "./types";

function sortComments(comments: Comment[], direction: SortDirection): Comment[] {
    comments.sort((a: Comment, b: Comment) => {
        const value = directionValue[direction]
        return (value * (new Date(b.date).getTime() - new Date(a.date).getTime()));
    });
    return comments;
}

const product = new Product();
product.id = '2';
product.name = 'Product 2';
product.price = 123


const products: Product[] = []
products.push(product)