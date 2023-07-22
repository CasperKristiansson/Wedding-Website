import os
from login.vendor.dotenv import load_dotenv

load_dotenv("/var/task/credentials.env")

PASSWORD = os.getenv("PASSWORD")
USERNAME = os.getenv("USERNAME")


def handler(event, context):
    if event["body"]["password"] == PASSWORD and event["body"]["username"] == USERNAME:
        return {
            "statusCode": 200,
            "body": "Login successful!",
            "success": True
        }
    else:
        return {
            "statusCode": 401,
            "body": "Login failed!",
            "success": False
        }
