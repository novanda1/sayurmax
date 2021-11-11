import os

env_name = os.environ.get("ENV_NAME")

if env_name == 'Production':
    from .prod import *
elif env_name == 'Staging':
    from .staging import *
else:
    from .dev import *
