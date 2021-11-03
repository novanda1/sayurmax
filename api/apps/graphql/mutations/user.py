import strawberry

from strawberry.types import Info

from apps.graphql.utils.authentication.default import JwtAuth, get_phone_from_jwt
from apps.graphql.services.user import UserServices

user_services = UserServices()


class UserMutation:
    @strawberry.mutation(permission_classes=[JwtAuth])
    def add_user_address(
        self,
        info: Info,
        name: str,
        recipient: str,
        phone: str,
        city: str,
        postal_code: str,
        address: str
    ):
        request: Request = info.context["request"]
        phone = get_phone_from_jwt(request=request)

        address = user_services.add_user_address(
            phone, name, recipient, city, postal_code, address)

        return address
