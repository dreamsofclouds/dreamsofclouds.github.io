#This script downloads ONLY the Hastag of each saved post
import instaloader
import random

class MyRateController(instaloader.RateController):
    def sleep(self, secs):
        sleep_duration = random.uniform(1, 3)  # Random sleep duration between 1 and 3 seconds
        time.sleep(sleep_duration)  # Sleep for the random duration

L = instaloader.Instaloader(rate_controller=lambda ctx: MyRateController(ctx))

# Replace 'USER' with the desired Instagram username
#This only works without a login because we are using the Import cookies Script
#username = 'username'
USER = "daniel_laiton"
PROFILE = USER

# Login to the Instagram account
L.load_session_from_file(USER)

# Retrieve saved posts for the logged-in user
saved_posts = instaloader.Profile.from_username(L.context, USER).get_saved_posts()

# Iterate over the saved posts and perform desired operations
for post in saved_posts:
    # Do something with the saved posts
    print(post)

# Continue using the Instaloader instance
# L.<method/property>
