from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from django.conf.urls import url
from . import views

urlpatterns = [
    path('',LoginView.as_view(),name='login'),
    path('cost/',views.the_cost,name='cost'),
    path('logout/',views.logout_view,name='logout'),
    path('upload_file/',views.upload_file,name='upload_file'),
    path('delete_cost/<int:costId>/', views.delete_cost , name='delete_cost'),
]