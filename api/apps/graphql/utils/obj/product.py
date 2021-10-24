from apps.graphql.schema.product import ProductType


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
