from apps.grocery.models import Product


def products():
    product = Product.objects.all()
    return product
