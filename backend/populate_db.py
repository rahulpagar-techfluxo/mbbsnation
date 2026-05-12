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
            warning_heading="⚠️ Important Notice to Students & Parents",
            warning_text="Do not pay extra money to agents or middlemen to secure your dream university admission.",
            phone_number="+91 98765 43210",
            whatsapp_number="919876543210",
            email="info@mbbsnation.com",
            address="New Delhi, India",
            instagram_link="https://instagram.com/mbbsnation",
            footer_about_text="We help Indian students secure direct admission in top MBBS universities abroad without charging consultancy fees. Your dream, our mission.",
            footer_disclaimer="Disclaimer: Admission process depends on university eligibility and NEET qualification requirements.",
        )
        print("✅ Site content created.")
    else:
        print("ℹ️  Site content already exists, skipping.")

    # Universities
    if not University.objects.exists():
        universities = [
            {
                "name": "Perm State Medical University",
                "country": "Russia",
                "total_fees": "18,00,000 INR",
                "medium": "English",
                "duration": "6 Years",
                "is_top_destination": True,
                "about": "",
                "student_facilities": "Hostel\nMess\nWifi",
                "intake": "Sept / Feb",
                "recognition": "WHO, NMC",
            },
            {
                "name": "Orenburg State Medical University",
                "country": "Russia",
                "total_fees": "19,50,000 INR",
                "medium": "English",
                "duration": "6 Years",
                "is_top_destination": True,
                "intake": "Sept / Feb",
                "recognition": "WHO, NMC",
            },
            {
                "name": "Mari State University",
                "country": "Russia",
                "total_fees": "17,20,000 INR",
                "medium": "English",
                "duration": "6 Years",
                "is_top_destination": True,
                "intake": "Sept / Feb",
                "recognition": "WHO, NMC",
            },
            {
                "name": "Kazan State Medical University",
                "country": "Russia",
                "total_fees": "24,00,000 INR",
                "medium": "English",
                "duration": "6 Years",
                "is_top_destination": True,
                "intake": "Sept / Feb",
                "recognition": "WHO, NMC",
            },
            {
                "name": "Osh State University",
                "country": "Kyrgyzstan",
                "total_fees": "14,50,000 INR",
                "medium": "English",
                "duration": "6 Years",
                "is_top_destination": True,
                "intake": "Sept / Feb",
                "recognition": "WHO, NMC",
            },
            {
                "name": "Royal Metropolitan University",
                "country": "Kyrgyzstan",
                "total_fees": "15,00,000 INR",
                "medium": "English",
                "duration": "6 Years",
                "is_top_destination": False,
                "intake": "Sept / Feb",
                "recognition": "WHO, NMC",
            },
        ]

        for u in universities:
            University.objects.create(**u)

        print(f"✅ {len(universities)} universities created.")
    else:
        print("ℹ️  Universities already exist, skipping.")

    print("\n🎉 Database population complete.")

if __name__ == '__main__':
    populate()
