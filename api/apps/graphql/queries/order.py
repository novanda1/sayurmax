import strawberry

from apps.graphql.services.order import OrderService

order_services = OrderService()


class OrderQuery:
    def order(self, id: strawberry.ID):
        order = order_services.order(id)

        return order
