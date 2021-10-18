import strawberry
from apps.grocery.models import Cart


def add_to_cart(user_id: strawberry.ID, product_id: strawberry.ID, amount: int):
    new_cart = Cart(user_id=user_id, product_id=product_id, amount=amount)

    try:
        new_cart.save()
    except:
        return False

    return True
