import requests
from utils import const


class Whatsapp:
    z_secret_token = const.zuwinda_token
    z_instances_id = const.zuwinda_instance_id

    base_url = "https://api.zuwinda.com"
    send_text = "/v1.2/message/whatsapp/send-text"

    headers = {"x-access-key": z_secret_token}

    auth_message = "Kode OTP Grocery anda adalah: %s"
    order_message = "Hi %s, Here is your order list:\n\n%s\n\
        \ntotal: %s \n\nDo you agree with that? (y|N)"
    order_item_message = "%s. (%s %s) %s: %s \n"

    def send(self, to: str, content: str):
        payload = {
            "instances_id": self.z_instances_id,
            "content": content,
            "to": to
        }

        try:
            response = requests.post(
                self.base_url + self.send_text, data=payload, headers=self.headers)
        except:
            raise Exception("failed fetch zuwinda api")

        return response
