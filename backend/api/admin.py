from django.contrib import admin
from .models import Lead, SiteContent, University, UniversityImage

@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ('name', 'mobile_number', 'email', 'preferred_country', 'created_at')

@admin.register(SiteContent)
class SiteContentAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        if self.model.objects.count() >= 1:
            return False
        return super().has_add_permission(request)

class UniversityImageInline(admin.TabularInline):
    model = UniversityImage
    extra = 1

@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = ('name', 'country', 'total_fees', 'is_top_destination')
    list_filter = ('country', 'is_top_destination')
    search_fields = ('name', 'country')
    inlines = [UniversityImageInline]
