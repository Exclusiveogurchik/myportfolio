import easyocr
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

def fix_image(image_path, prices, output_path):
    print(f"Processing {image_path}...")
    reader = easyocr.Reader(['en'])
    img_pil = Image.open(image_path).convert("RGBA")
    draw = ImageDraw.Draw(img_pil)
    
    font_path = "C:\\Windows\\Fonts\\arial.ttf"
    font_small = ImageFont.truetype(font_path, 16)
    
    results = reader.readtext(image_path)
    
    for (bbox, text, prob) in results:
        text_lower = text.lower()
        car_key = None
        if "ferrari" in text_lower or "f8" in text_lower:
            car_key = "Ferrari"
        elif "lamborghini" in text_lower or "aven" in text_lower:
            car_key = "Lamborghini"
        elif "bentley" in text_lower or "cont" in text_lower:
            car_key = "Bentley"
        elif "porsche" in text_lower or "911" in text_lower:
            car_key = "Porsche"
            
        if car_key:
            top_left = bbox[0]
            bottom_left = bbox[3]
            
            x = top_left[0]
            y_title_bottom = bottom_left[1]
            
            rect_x1 = int(x)
            rect_y1 = int(y_title_bottom) + 5
            rect_x2 = rect_x1 + 160
            rect_y2 = rect_y1 + 35
            
            # Sample background color near the title
            sample_color = img_pil.getpixel((int(x), int(top_left[1]) - 10))
            
            # Draw rectangle to hide the garbled text
            draw.rectangle([rect_x1, rect_y1, rect_x2, rect_y2], fill=sample_color)
            
            # Draw the clean text
            price_text = prices[car_key]
            draw.text((rect_x1, rect_y1 + 5), price_text, fill=(200, 180, 150), font=font_small)
            print(f"Replaced text for {car_key} at {rect_x1}, {rect_y1}")

    img_pil.save(output_path)
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    prices = {
        "Ferrari": "From $1,800",
        "Lamborghini": "From $2,200",
        "Bentley": "From $1,500",
        "Porsche": "From $1,200"
    }
    fix_image("public/projects/velocity_mockup.png", prices, "public/projects/velocity_mockup.png")
