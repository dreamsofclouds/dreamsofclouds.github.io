import instaloader

# Read the saved posts from the file
with open('Saved-Posts.txt', 'r') as file:
    saved_posts = file.readlines()

# Remove any leading/trailing whitespaces and newlines
saved_posts = [post.strip() for post in saved_posts]

# Instantiate Instaloader
L = instaloader.Instaloader()

# Download posts
for post in saved_posts:
    post_id = post.strip('<>').split()[1]  # Extract the post ID from the line
    try:
        post_obj = instaloader.Post.from_shortcode(L.context, post_id)
        L.download_post(post_obj, target='saved')
    except instaloader.exceptions.InstaloaderException as e:
        print(f"Error occurred while downloading post {post_id}: {e}")

# Done!
print("All posts downloaded successfully.")
