import { Product } from "src/domain/entities/product";
import { Product as PrismaProduct } from "@prisma/client";

export class ProductMapper {
    static toDomain(prismaProduct: PrismaProduct): Product {
        return new Product({
            name: prismaProduct.name,
            description: prismaProduct.description || "",
            image: prismaProduct.image || undefined,
            cost: prismaProduct.cost,
            userId: prismaProduct.userId
        }, prismaProduct.id);
    }

    static toPrisma(product: Product): PrismaProduct {
        return {
            name: product.getName(),
            description: product.getDescription(),
            image: product.getImage(),
            cost: product.getCost(),
            userId: product.getUserId()
        };
    }
}