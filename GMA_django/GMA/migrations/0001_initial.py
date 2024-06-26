# Generated by Django 4.1.7 on 2023-09-11 12:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Jogador',
            fields=[
                ('nick', models.CharField(max_length=30, primary_key=True, serialize=False, unique=True)),
                ('fichas', models.CharField(max_length=30, null=True)),
                ('resumo', models.CharField(max_length=300, null=True)),
                ('habilidades', models.CharField(max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Mesa',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('image', models.CharField(blank=True, default='', max_length=1000)),
                ('title', models.CharField(default='', max_length=50)),
                ('data', models.CharField(default='11/09/2023', max_length=10)),
                ('description', models.TextField(blank=True, default='', max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='AvisoSessoes',
            fields=[
                ('id_mesas', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='GMA.mesa', unique=True)),
                ('horario', models.DateTimeField()),
                ('aviso', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Bag',
            fields=[
                ('nick_jogador', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='GMA.jogador')),
                ('bag', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('nick', models.CharField(max_length=30, unique=True)),
                ('avatar', models.CharField(default='', max_length=1000)),
                ('bio', models.TextField(blank=True, default='', max_length=300)),
                ('is_active', models.BooleanField(default=True)),
                ('is_anonymous', models.BooleanField(default=False)),
                ('is_authenticated', models.BooleanField(default=True)),
                ('amigos', models.ManyToManyField(blank=True, related_name='amigos_do_usuario', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('hora_pub', models.DateTimeField(auto_now_add=True)),
                ('conteudo', models.TextField(max_length=100)),
                ('mesa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='GMA.mesa')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-hora_pub'],
            },
        ),
        migrations.AddField(
            model_name='mesa',
            name='jogadores',
            field=models.ManyToManyField(blank=True, related_name='participantes_mesa', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='mesa',
            name='mestre',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='mestre_mesa', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='jogador',
            name='mesas',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='GMA.mesa'),
        ),
        migrations.AddField(
            model_name='jogador',
            name='usuario',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='Ficha',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('nome', models.CharField(default='', max_length=70)),
                ('descricao', models.TextField(blank=True, default='', max_length=300)),
                ('habilidades', models.TextField(blank=True, default='', max_length=100)),
                ('bag', models.TextField(blank=True, default='')),
                ('data', models.DateField(auto_now_add=True)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddConstraint(
            model_name='mesa',
            constraint=models.UniqueConstraint(fields=('mestre', 'title'), name='combinacao_unica_mestre_e_titulo_mesa'),
        ),
        migrations.AddConstraint(
            model_name='ficha',
            constraint=models.UniqueConstraint(fields=('usuario', 'nome'), name='combinacao_unica_usuario_fichanome'),
        ),
        migrations.AddField(
            model_name='bag',
            name='id_mesa',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='GMA.mesa', unique=True),
        ),
        migrations.AddField(
            model_name='avisosessoes',
            name='nick_jogador',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='GMA.jogador'),
        ),
    ]
