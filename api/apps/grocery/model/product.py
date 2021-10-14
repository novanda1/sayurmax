from django.db import models
from apps.grocery.model.category import Category 
from django.utils.text import slugify 

class Product(models.Model):
    title = models.CharField(max_length=250)
    slug = models.SlugField() 
    categories = models.ManyToManyField(Category, related_name="product")

    

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Product, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        
