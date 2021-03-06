import uuid
from django.db import models
from django.db.models.fields import UUIDField
from django.utils.text import slugify
from django.utils.translation import gettext as _

from apps.user.models import User
from utils.slugify import unique_slugify


class Category(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        unique_slugify(self, self.title)
        super(Category, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class ItemUnit(models.Model):
    title = models.CharField(_("Item Unit Title"), max_length=10)

    class Meta:
        verbose_name = _("Item Unit")
        verbose_name_plural = _("Item Units")

    def __str__(self):
        return self.title


class Product(models.Model):
    id = UUIDField(primary_key=True, default=uuid.uuid4,
                   editable=False, unique=True)
    title = models.CharField(max_length=250,)
    slug = models.SlugField(unique=True)
    categories = models.ManyToManyField(Category)
    image_url = models.CharField(
        _("Image Url"), max_length=250,)
    seller_price = models.BigIntegerField(_("Price from seller"))
    normal_price = models.BigIntegerField()
    dicount_price = models.BigIntegerField(
        null=True, blank=True, default=None)
    item_unit = models.ForeignKey(ItemUnit, verbose_name=_(
        "Item Unit"), on_delete=models.PROTECT)
    information = models.TextField(_("Product Infromation"), blank=True)
    nutrition = models.TextField(_("Product Nutrition"), blank=True)
    how_to_keep = models.TextField(_("How To Keep"), blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        unique_slugify(self, self.title)
        super(Product, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'


class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    class Meta:
        app_label = 'order'
        verbose_name = _("cart")
        verbose_name_plural = _("carts")

    def __str__(self):
        return str(self.user.display_name or self.user.phone)


class CartProduct(models.Model):
    product = models.ForeignKey(
        Product, verbose_name=_("Product"), on_delete=models.CASCADE)
    amount = models.BigIntegerField(_("product amount"), default=1)
    cart = models.ForeignKey(Cart, verbose_name=_(
        "cart"), on_delete=models.CASCADE)

    class Meta:
        app_label = 'order'
        verbose_name = _("cartproduct")
        verbose_name_plural = _("cartproducts")

    def __str__(self):
        return str(self.id)
