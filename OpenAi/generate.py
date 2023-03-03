import openai
from PIL import Image
import requests

# Load your API key from an environment variable or secret management service
openai.api_key = "OPENAI_API_KEY"


response = openai.Image.create(
  prompt="Dancing Witches. Anamorphosis. Baphomet",
  n=5,
  size="1024x1024"
)

for image_data in response['data']:
    image_url = image_data['url']
    image = Image.open(requests.get(image_url, stream=True).raw)
    image.show()


