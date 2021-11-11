from .base import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
CORS_ALLOWED_ORIGINS = [
    'https://studio.apollographql.com',
    'http://localhost:3000',
    'http://localhost:8081'
]
