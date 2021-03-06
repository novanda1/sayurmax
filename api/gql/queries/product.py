from gql.types.product import ProductType
from apps.grocery.models import Product

from typing import Optional
from cursor_pagination import CursorPaginator

import strawberry

from asgiref.sync import sync_to_async


class ProductQuery:
    @strawberry.field
    @sync_to_async
    def products(limit: int, after: Optional[str] = None):
        qs = Product.objects.all()
        paginator = CursorPaginator(qs, ordering=('-created_at', '-id'))
        page = paginator.page(first=limit, after=after)

        class Data:
            def __init__(self, result, has_next, next_cursor):
                real_next_cursor = next_cursor if has_next else ""

                self.result = [ProductType(p.pk, p.title, p.slug, p.categories.all(), p.image_url, p.normal_price,
                                           p.dicount_price, p.item_unit, p.information, p.nutrition, p.how_to_keep) for p in result]
                self.has_next = has_next
                self.next_cursor = real_next_cursor

        return Data([p for p in page], page.has_next, paginator.cursor(page[-1]))

    @strawberry.field
    async def product(id: strawberry.ID, info: strawberry.types.Info):
        product = await info.context['product_loader'].load(id)
        return product
