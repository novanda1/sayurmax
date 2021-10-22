import requests
from datetime import datetime

from dotenv import load_dotenv, dotenv_values
import os

config = {
    **dotenv_values(".env.dev"),
    **os.environ,
}

load_dotenv(dotenv_path='./.env.dev')


class Whatsapp:
    z_secret_token = config["ZUWINDA_TOKEN"]
    z_instances_id = config["ZUWINDA_INSTANCE_ID"]

    base_url = "https://api.zuwinda.com"
    send_text = "/v1.2/message/whatsapp/send-text"

    headers = {"x-access-key": z_secret_token}

    def send(self, to: str, content: str):
        payload = {
            "instances_id": self.z_instances_id,
            "content": content,
            "to": to
        }

        response = requests.post(self.base_url + self.send_text, data=payload, headers=self.headers)
        raise Exception( response)
