import strawberry
from strawberry.types import Info

from apps.grocery.models import Cart, Product
from apps.user.models import User


def add_to_cart(self, info: Info, product_id: str, amount: int):
    request: typing.Union[Request, WebSocket] = info.context["request"]
    
    try:
        userid = request.session['userid']
    except:
        raise Exception("not authenticated")

    



    
