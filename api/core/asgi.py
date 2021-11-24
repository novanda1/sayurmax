import os
from importlib.util import find_spec

from django import setup
from django.conf import settings
from django.core.wsgi import get_wsgi_application

from fastapi import FastAPI
from fastapi.middleware.wsgi import WSGIMiddleware
from starlette.middleware.cors import CORSMiddleware

from fastapi.staticfiles import StaticFiles


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings.base")


def get_application() -> FastAPI:
    setup()
    from gql.endpoints import graphql_app

    app = FastAPI(title=settings.PROJECT_NAME, debug=settings.DEBUG)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.CORS_ALLOWED_ORIGINS or ["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.mount("/graphql", graphql_app)
    app.mount("/django", WSGIMiddleware(get_wsgi_application()))

    app.mount('/static', StaticFiles(
        directory=os.path.normpath(
            os.path.join(
                find_spec('django.contrib.admin').origin, '..', 'static')
        )
    ),
        name='static',
    )

    return app


app = get_application()
