import contextlib
import os
import json
from login.vendor.dotenv import load_dotenv

load_dotenv("/var/task/credentials.env")

PASSWORD = os.getenv("PASSWORD")
USERNAME = os.getenv("USERNAME")


def handler(event, context):
    print(json.dumps(event))
    print("Ps", PASSWORD, USERNAME)

    event = json.loads(event["body"])
    print("As", event["password"], event["username"])
    if event["password"] == PASSWORD and event["username"] == USERNAME:
        return {
            "statusCode": 200,
            "body": "Login successful!",
            "success": True,
            "headers": {
                "Access-Control-Allow-Origin" : "*",
            },
        }

    return {
        "statusCode": 401,
        "body": "Login failed!",
        "success": False,
        "headers": {
            "Access-Control-Allow-Origin" : "*",
        },
    }
