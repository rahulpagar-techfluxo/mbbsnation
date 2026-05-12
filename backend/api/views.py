from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Lead, SiteContent, University
from .serializers import LeadSerializer, SiteContentSerializer, UniversitySerializer

class LeadCreateView(generics.CreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class SiteContentView(APIView):
    def get(self, request, *args, **kwargs):
        content = SiteContent.objects.first()
        if not content:
            content = SiteContent.objects.create()
        serializer = SiteContentSerializer(content)
        return Response(serializer.data)

class UniversityListView(generics.ListAPIView):
    queryset = University.objects.all().order_by('id')
    serializer_class = UniversitySerializer

class UniversityDetailView(generics.RetrieveAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer
