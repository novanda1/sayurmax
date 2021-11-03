from apps.grocery.models import Cart, CartProduct, Product


class CartServices:
    def create(user):
        try:
            cart = Cart.objects.create(user=user)
            cart.save()
        except:
            raise Exception("failed to create user")

        return cart

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
            cart_pruduct = CartProduct(
                product=product, cart=cart, amount=amount)
            cart_product.save()
        except:
            raise Exception("CartProduct model: add error")

        return cart

    def edit_product_amount(cart_product_id, amount):
        try:
            product = CartProduct.objects.get(id=cart_product_id)
        except:
            raise Exception("cart product not found")

        product.amount = amount
        product.save()

        return product
