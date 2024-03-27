from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
import uuid

class UsuarioManager(BaseUserManager):
    def create_user(self, email, avatar='', **extra_fields):
        if not email:
            raise ValueError("Usuario deve possuir um email.")

        email = self.normalize_email(email)
        user = self.model(email=email, avatar=avatar, **extra_fields)

        #user.set_password(password)
        user.save()

        return user

class Usuario(models.Model):

    id = models.UUIDField(
    primary_key=True,
    default=uuid.uuid4,
    blank=False)

    email = models.EmailField(
        max_length=255, 
        null=False,
        blank=False,
        unique=True
    )

    nick = models.CharField(
        max_length=30,
        null=False,
        blank=False,
        unique=True
    )

    avatar = models.CharField(
        max_length=1000,
        default='',
        blank=False
    )

    bio = models.TextField(
        max_length=300,
        default='',
        blank=True
    )

    amigos = models.ManyToManyField(
        "Usuario",
        related_name="amigos_do_usuario",
        blank=True
    )

    is_active = models.BooleanField(default=True)
    is_anonymous = models.BooleanField(default=False)
    is_authenticated = models.BooleanField(default=True)
    
    objects = UsuarioManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nick', 'avatar']

    def __str__(self):
        return self.email