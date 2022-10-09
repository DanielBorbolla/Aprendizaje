# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = 'AC5540a076ca55d1b9f86e09e3caeb51d1'
auth_token = '8bfe34871841012925996c3e9b9690f2'
client = Client(account_sid, auth_token)

message = client.messages.create(
    body='Hello there!',
    from_='+17473003187',
    to='+5214421451544'
)
