from rest_framework import serializers
from .models import Lead, SiteContent, University, UniversityImage

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'

class SiteContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteContent
        fields = '__all__'

class UniversityImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UniversityImage
        fields = ['id', 'image', 'caption']

class UniversitySerializer(serializers.ModelSerializer):
    gallery_images = UniversityImageSerializer(many=True, read_only=True)

    class Meta:
        model = University
        fields = '__all__'
