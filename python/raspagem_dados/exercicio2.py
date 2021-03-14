import requests

# login = 'user'

# url = 'url'

response = requests.get("https://api.github.com/users")
users = response.json()
# print(users[0])
for user in users:
    print(f"{'login'}, {'url'}")
