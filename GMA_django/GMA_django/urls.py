
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from GMA.views import get_posts, get_user_data, get_user_profile, get_mesas, sign_up, create_mesa

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('auth/', include('djoser.urls')),
    path('gma/createuser/', sign_up, name='new-user'),
    #path('auth/', include('djoser.urls.jwt')),
    path('gma/posts/', get_posts, name='get-posts'),
    #path('auth/users/me', get_user_data, name='get-user-data'),
    path('gma/user/profile/', get_user_profile, name='user-profile'),
    path('gma/mesas/', get_mesas, name='get-mesas'),
    path('gma/criar-mesa/', create_mesa, name='create-mesa')
    #path('addMesabyId/<str:mesa_id>/', views.add_jogador_to_mesa, name='addMesabyId')
]

#urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
