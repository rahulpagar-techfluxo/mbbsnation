from django.db import models

class SiteContent(models.Model):
    # Hero Section
    hero_heading = models.CharField(max_length=255, default="NO CONSULTANCY FEES CHARGED DIRECT MBBS ADMISSION ABROAD")
    hero_subheading = models.TextField(default="Get direct admission assistance for MBBS abroad through official university tie-ups. No hidden charges. No middleman fees.")
    
    # Warning Section
    warning_heading = models.CharField(max_length=255, default="⚠️ Important Notice to Students & Parents")
    warning_text = models.TextField(default="Do not pay extra money to agents or middlemen to secure your dream university admission.")
    
    # Contact Info
    phone_number = models.CharField(max_length=20, default="+91 98765 43210")
    whatsapp_number = models.CharField(max_length=20, default="919876543210")
    email = models.EmailField(default="info@mbbsnation.com")
    address = models.CharField(max_length=255, default="New Delhi, India")
    instagram_link = models.URLField(blank=True, null=True, default="https://instagram.com/mbbsnation")
    
    # About / Footer
    footer_about_text = models.TextField(default="We help Indian students secure direct admission in top MBBS universities abroad without charging consultancy fees.")
    footer_disclaimer = models.TextField(default="Disclaimer: Admission process depends on university eligibility and NEET qualification requirements.")
    
    def __str__(self):
        return "Site Content Configuration (Edit this row)"

class University(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=100)
    total_fees = models.CharField(max_length=100, help_text="e.g., 18,00,000 INR")
    medium = models.CharField(max_length=50, default="English")
    duration = models.CharField(max_length=50, default="6 Years")
    image = models.ImageField(upload_to='universities/', blank=True, null=True)
    is_top_destination = models.BooleanField(default=False, help_text="Show on homepage as top destination country card?")

    def __str__(self):
        return self.name

class Lead(models.Model):
    name = models.CharField(max_length=255)
    mobile_number = models.CharField(max_length=20)
    email = models.EmailField()
    neet_score = models.IntegerField(null=True, blank=True)
    preferred_country = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
