from apps.grocery.models import Product
from typing import Optional, List

from cursor_pagination import CursorPaginator


def products(limit: int, after: Optional[str] = None):
    qs = Product.objects.all()
    paginator = CursorPaginator(qs, ordering=('-title', '-id'))
    page = paginator.page(first=limit, after=after)

    # todo -> DRY
    class SingleProduct:
        def __init__(self, id, title, slug, categories, image_url, normal_price, dicount_price, item_unit, information, nutrition, how_to_keep):
            self.id = id
            self.title = title
            self.slug = slug
            self.categories = categories.all()
            self.image_url = image_url
            self.normal_price = normal_price
            self.dicount_price = dicount_price
            self.item_unit = item_unit
            self.information = information
            self.nutrition = nutrition
            self.how_to_keep = how_to_keep

    class Data:
        def __init__(self, result, has_next, next_cursor):
            self.result = [SingleProduct(p.pk, p.title, p.slug, p.categories, p.image_url, p.normal_price,
                                         p.dicount_price, p.item_unit, p.information, p.nutrition, p.how_to_keep) for p in result]
            self.has_next = has_next
            self.next_cursor = next_cursor

    return Data([p for p in page], page.has_next, paginator.cursor(page[-1]))
