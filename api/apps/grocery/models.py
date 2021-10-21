from django.db import models
from django.utils.text import slugify
from django.utils.translation import gettext as _


class Category(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Category, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


item_choices = [
    "pack",
    "gram",
    "kg",
    "pcs"
]

ITEM_UNIT_CHOICES = tuple((str(t), str(t)) for t in item_choices)

# for it in ITEM_UNIT_CHOICES:
#     ITEM_UNIT_CHOICES.append(tuple( zip(it, it)))


class Product(models.Model):
    title = models.CharField(max_length=250,)
    slug = models.SlugField(unique=True)
    categories = models.ManyToManyField(Category)
    image_url = models.CharField(
        _("Image Url"), max_length=250,)
    normal_price = models.BigIntegerField()
    dicount_price = models.BigIntegerField(
        null=True, blank=True, default=None)
    item_unit = models.CharField(max_length=10, choices=ITEM_UNIT_CHOICES)
    information = models.TextField(_("Product Infromation"))
    nutrition = models.TextField(_("Product Nutrition"))
    how_to_keep = models.TextField(_("How To Keep"))

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Product, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'


class Cart(models.Model):
    user_id = models.IntegerField(_("User ID"))
    product_id = models.IntegerField(_("Product ID"))
    amount = models.IntegerField(_("Product Amount"))

    class Meta:
        verbose_name = _("cart")
        verbose_name_plural = _("carts")

    def __str__(self):
        return self.pk
