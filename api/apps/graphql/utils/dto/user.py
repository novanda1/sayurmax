import strawberry


@strawberry.input
class CreateUserDto:
    phone: str
    secret: str


@strawberry.input
class LoginDto:
    phone: str
    secret: str
