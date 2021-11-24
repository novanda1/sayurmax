FROM python:3.9

WORKDIR /code
COPY ./requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt
COPY . .

CMD python manage.py collectstatic --noinput; uvicorn core.asgi:app --reload --host 0.0.0.0