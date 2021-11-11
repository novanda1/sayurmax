
from dotenv import load_dotenv, dotenv_values
import os

config = {
    **dotenv_values(".env.dev"),
    **os.environ,
}

load_dotenv()

django_secret_key = config['DJANGO_SECRET_KEY']
jwt_secret = config['JWT_SECRET']
topt_32 = config['TOTP_32']
zuwinda_token = config['ZUWINDA_TOKEN']
zuwinda_instance_id = config['ZUWINDA_INSTANCE_ID']
db_name = config['DATABASE_NAME']
db_user = config['DATABASE_USER']
db_password = config['DATABASE_PASSWORD']
db_host = config['DATABASE_HOST']
db_port = config['DATABASE_PORT']