from core.tests.factories.user import create as user
from core.tests.factories.product import create_units, create_categories, create_products
from core.tests.factories.cart import create as cart
from core.tests.factories.order import create as order


def run():
    user(l=10)
    create_units()
    create_categories()
    create_products()
    cart()
    order()
