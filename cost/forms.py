from django import forms
from django.core.validators import FileExtensionValidator

class UploadCsvForm(forms.Form):
    validator = FileExtensionValidator(['csv'])
    file = forms.FileField( help_text="Formats accepted: csv", required=True, validators=[validator] )