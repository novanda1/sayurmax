def say_hello():
    return "hello from gql"


"""possible different pattern
    
#QueryResolver = create_type(name="Query", fields=[say_hello ])
# @strawberry.field(name="hello")
# def say_hello() -> str:
#     return "hello from gql"
"""
