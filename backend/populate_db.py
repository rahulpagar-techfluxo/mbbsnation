import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from api.models import SiteContent, University

def populate():
    # Site Content
    if not SiteContent.objects.exists():
        SiteContent.objects.create(
            hero_heading="NO CONSULTANCY FEES CHARGED DIRECT MBBS ADMISSION ABROAD",
            hero_subheading="Get direct admission assistance for MBBS abroad through official university tie-ups. No hidden charges. No middleman fees.",
            phone_number="+91 98765 43210",
            whatsapp_number="919876543210",
            email="info@mbbsnation.com",
            address="New Delhi, India",
            instagram_link="https://instagram.com/mbbsnation",
            footer_about_text="We help Indian students secure direct admission in top MBBS universities abroad without charging consultancy fees. Your dream, our mission."
        )

    # Universities
    if not University.objects.exists():
        universities = [
            {"name": "Perm State Medical University", "country": "Russia", "total_fees": "18,00,000 INR", "is_top_destination": True},
            {"name": "Orenburg State Medical University", "country": "Russia", "total_fees": "19,50,000 INR", "is_top_destination": True},
            {"name": "Mari State University", "country": "Russia", "total_fees": "17,20,000 INR", "is_top_destination": True},
            {"name": "Kazan State Medical University", "country": "Russia", "total_fees": "24,00,000 INR", "is_top_destination": True},
            {"name": "Osh State University", "country": "Kyrgyzstan", "total_fees": "14,50,000 INR", "is_top_destination": True},
            {"name": "Royal Metropolitan University", "country": "Kyrgyzstan", "total_fees": "15,00,000 INR", "is_top_destination": False},
        ]
        
        for u in universities:
            University.objects.create(**u)
            
    print("Database populated successfully.")

if __name__ == '__main__':
    populate()
