import strawberry
from typing import List, Optional
from enum import Enum


@strawberry.type
class CategoryType:
    id: int
    title: str
    slug: str


@strawberry.type
class ProductType:
    id: int
    title: str
    slug: str
    categories: Optional[List[CategoryType]]
    image_url: str
    normal_price: int
    dicount_price: Optional[int]
    item_unit: str
    information: Optional[str]
    nutrition: Optional[str]
    how_to_keep: Optional[str]


@strawberry.type
class ProductResponse:
    result: List[ProductType]
    has_next: bool
    next_cursor: Optional[str]
