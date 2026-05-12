from django.urls import path
from .views import LeadCreateView, SiteContentView, UniversityListView, UniversityDetailView

urlpatterns = [
    path('leads/', LeadCreateView.as_view(), name='lead-create'),
    path('site-content/', SiteContentView.as_view(), name='site-content'),
    path('universities/', UniversityListView.as_view(), name='university-list'),
    path('universities/<int:pk>/', UniversityDetailView.as_view(), name='university-detail'),
]
