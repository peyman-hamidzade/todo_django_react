from django.db import models

# Create your models here.

class TODO(models.Model):
    title = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title