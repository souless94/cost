from django.contrib.auth import authenticate, login , logout
from django.contrib.auth.decorators import login_required 
from django.views.decorators.http import require_POST
from django.http.response import HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.shortcuts import render , redirect

from .forms import UploadCsvForm
from .models import Costs
from .check import handle_uploaded_file


# Create your views here.

@login_required(login_url='/')
@never_cache
def the_cost(request):
    """ main page after login

    Arguments:
        request {request} -- login request

    Returns:
         -- main page after login
    """
    the_form = UploadCsvForm()
    the_data = Costs.objects.order_by('purchase_date').all()
    context = {'the_form' : the_form, 'the_data':the_data}
    return render(request,'index.html',context)


@login_required(login_url='/')
@never_cache
@require_POST
def upload_file(request):
    """ function to upload file
    
    Arguments:
        request {request} -- upload request
    
    Returns:
        redirect -- redirect to main page
    """
    form = UploadCsvForm(request.POST, request.FILES)
    if form.is_valid():
        handle_uploaded_file(request.FILES['file'],request.user)
    return redirect('/cost/')

@login_required(login_url='/')
@never_cache
def delete_cost(request,costId):
    """delete data , only admin users are authorized for this function
    
    Arguments:
        request {request} -- takes in a request
        costId {Integer} -- the costId of the costs
    
    Returns:
        redirect -- delete the data if is valid , redirects to main page
    """
    if request.user.is_staff:
        Costs.objects.get(pk=costId).delete()
    return redirect('/cost/')


@never_cache
def logout_view(request):
    """logout
    
    Arguments:
        request {request} -- logout request
    
    Returns:
        redirect -- redirects to login view 
    """
    logout(request)
    return redirect('/')