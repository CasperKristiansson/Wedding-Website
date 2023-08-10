import random
import os
from PIL import Image

# Define the base URL and image directory
base_url = "assets/External/"
image_directory = "C:\\Programming\\wedding-website\\src\\assets\\Wedding Images"

# Generate TypeScript code
images = []
for image_file in os.listdir(image_directory):
    if image_file.endswith(".jpg"):
      src = f"{base_url}{image_file}"
      # get the width and height of the image
      width, height = Image.open(f"{image_directory}\\{image_file}").size
      images.append(
          f'   {{\n      src: "{src}",\n      width: {width},\n      height: {height},\n   }},'
      )

typescript_code = (
    "const images = [\n"
    + "\n".join(images)
    + "\n];"
)

# Write the TypeScript code to a text file
output_file_path = "photo_array.txt"
with open(output_file_path, "w") as output_file:
    output_file.write(typescript_code)

print(f"Photo array TypeScript code written to {output_file_path}")
