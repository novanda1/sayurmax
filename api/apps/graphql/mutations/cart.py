import strawberry
from apps.grocery.models import Cart, Product
from apps.user.models import User


def add_to_cart(user_id: strawberry.ID, product_id: strawberry.ID, amount: int):
    new_cart = Cart(user_id=user_id, product_id=product_id, amount=amount)

    try:
        User.objects.get(pk=user_id)
    except:
        raise Exception('user not found')

    try:
        Product.objects.get(pk=product_id)
    except:
        raise Exception('product not found')

    try:
        new_cart.save()
    except:
        raise Exception("failed to save cart")

    return new_cart


def change_cart_amount(id: int, amount: int):

    try:
        cart = Cart.objects.get(pk=id)
    except:
        raise Exception("cart not found")

    cart.amount = amount

    try:
        cart.save()
    except:
        raise Exception("failed to save")

    return cart


def delete_cart(id: int):
    try:
        cart = Cart.objects.get(pk=id)
    except:
        raise Exception("cart not found")

    try:
        cart.delete()
    except:
        raise Exception("failed delete cart")

    return True
