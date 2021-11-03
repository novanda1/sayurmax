from apps.grocery.models import Cart, CartProduct, Product
from apps.user.models import User


class CartServices:
    def add_to_cart(self, phone, productid, amount):
        try:
            user = User.objects.get(phone=phone)
        except:
            raise Exception("user doesnt exists")

        try:
            cart = Cart.objects.get(user=user)
        except:
            cart = Cart(user=user, total_price=0)
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

        return cart

    def edit_product_amount(cart_product_id, amount):
        try:
            product = CartProduct.objects.get(id=cart_product_id)
        except:
            raise Exception("cart product not found")

        product.amount = amount
        product.save()

        return product

    def delete_cart_product(self, id, phone):
        try:
            product = CartProduct.objects.get(id)
        except:
            raise Exception("cart product not found")
            

        try:
            product.delete()
        except:
            return False

        return True
