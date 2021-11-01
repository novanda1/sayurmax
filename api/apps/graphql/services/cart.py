from apps.grocery.models import Cart, CartProduct


class CartServices:
    def create(user):
        try:
            cart = Cart.objects.create(user=user)
            cart.save()
        except:
            raise Exception("failed to create user")

        return cart

    def add_new_product_to_cart(product, cart, amount):
        try:
            user = User.objects.get(id=user_id)
            cart = Cart.objects.get(user=user)
        except:
            cart = Cart(user=user, total_price=0)
            cart.save()

        try:
            pruduct = CartProduct(product=product, cart=cart, amount=amount)
            
            product.save()
        except:
            raise Exception("CartProduct model: add error")

        return product

    def edit_product_amount(cart_product_id, amount):
        try:
            product = CartProduct.objects.get(id=cart_product_id)
        except:
            raise Exception("cart product not found")

        product.amount = amount
        product.save()

        return product
