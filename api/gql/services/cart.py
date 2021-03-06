from apps.grocery.models import Cart, CartProduct, Product
from apps.user.models import User
from gql.types.cart import CartProduct as CartProductType, TypeOfProduct, Cart as CartType
from gql.types.product import ProductType


class CartServices:
    def add_to_cart(self, userid, productid, amount):
        try:
            user = User.objects.get(pk=userid)
        except:
            raise Exception("user doesnt exists")

        try:
            cart = Cart.objects.get(user__pk=userid)
        except:
            cart = Cart(user=user)
            cart.save()

        try:
            product = Product.objects.get(id=productid)
        except:
            raise Exception("product not found")

        try:
            cart_product = CartProduct.objects.get(
                product=product, cart=cart)
        except:
            cart_product = CartProduct(
                product=product, cart=cart)

        cart_product.amount = amount
        cart_product.save()

        product_data = ProductType(
            product.id,
            product.title,
            product.slug,
            # the reason to not use "product" directly is just for changing this categories
            # @todo make it better
            product.categories.all(),
            product.image_url,
            product.normal_price,
            product.dicount_price,
            product.item_unit,
            product.information,
            product.nutrition,
            product.how_to_keep,
        )

        return CartProductType(
            id=cart_product.id,
            amount=cart_product.amount,
            product=product_data,
        )

    def edit_product_amount(self, product_id, amount, product_type):
        try:
            product = CartProduct.objects.filter(
                product__pk=product_id)[0] if product_type == TypeOfProduct.PRODUCT else CartProduct.objects.filter(id=product_id)
        except:
            raise Exception("cart product not found")

        product.amount = amount
        product.save()

        product_data = ProductType(
            product.id,
            product.title,
            product.slug,
            # the reason to not use "product" directly is just for changing this categories
            # @todo make it better
            product.categories.all(),
            product.image_url,
            product.normal_price,
            product.dicount_price,
            product.item_unit,
            product.information,
            product.nutrition,
            product.how_to_keep,
        )

        return product_data

    def delete_cart_product(self, id):
        try:
            product = CartProduct.objects.get(pk=id)
        except:
            raise Exception("cart product not found")

        try:
            product.delete()
        except:
            return False

        return True

    def get_cart(self, userid):
        try:
            cart = Cart.objects.get(user__pk=userid)
        except:
            raise Exception("cart not found")

        try:
            cart_product = CartProduct.objects.filter(cart=cart.id)
        except:
            return CartType(
                id=cart.id,
                cart_product=[]
            )

        return CartType(
            id=cart.id,
            cart_product=cart_product
        )
