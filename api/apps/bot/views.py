from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse


@csrf_exempt
def index(request):
    if request.method == 'POST':
        incoming_msg = request.POST['Body'].lower()

        return HttpResponse("")

    return HttpResponse("")
