import strawberry

from apps.graphql.schema.order import 
from apps.graphql.services.order import OrderService

class OrderMutation:
    def make_order(user_id: strawberry.ID, amount: float, address_id: strawberry.ID):
        order_service = OrderService()
        result = order_service.create(
            user_id=user_id, amount=amount, address_id=address_id, shipname=shipname)
