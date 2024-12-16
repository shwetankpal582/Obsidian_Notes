---
tags:
  - python
  - backend
Date: 2024 - 12 - 12
Topic:
  - Django installations
  - virtual Env creation
Subject:
---
# Installation of Virtual Environment
## 1. **Installing Latest python from the website**

## 2. **Create `venv` for better working**
 run command for creation of virtual `Env`  (Traditionally)
```bash
python3 -m venv .venv
```
`.venv` is the folder which setups the virtual environment for out project.

For faster and better way
- $ Install `uv` package manager on mac/linux/windows from [here](https://docs.astral.sh/uv/guides/install-python/#viewing-python-installations)


> [!attention] Faster Way to install any python package 
For creation of virtual environment :
>```bash
uv venv
>```
>
>Now we can activate and deactivate virtual environment by command follows:
>```bash
># for activation of virtual environment
source .venv/bin/activate
>
># for deactivation 
deactivate
>```

## **3. Create a Project Directory**

Choose or create a directory where you want to initialize your Django project:

```bash
mkdir myproject
cd myproject
```

---

## **4. Start a Django Project**

Run the following command to create a new Django project:

```bash
django-admin startproject projectname .
```

> The `.` places the project files in the current directory. If you prefer to create a subdirectory for your project files, omit the `.`.

---

## **5. Directory Structure**

Your project directory will look like this:

```
myproject/
├── manage.py
├── projectname/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
```

---

## **6. Run the Development Server**

Start the development server to verify the setup:

```bash
python manage.py runserver
```

Open a browser and navigate to `http://127.0.0.1:8000/`. You should see the Django welcome page.

---

## **7. Create an App**

To add functionality to your project, create an app:

```bash
python manage.py startapp appname
```

This creates a directory structure like:

```
appname/
├── admin.py
├── apps.py
├── migrations/
├── models.py
├── tests.py
└── views.py
```

---

## **8. Register the App**

Add the app to `INSTALLED_APPS` in `projectname/settings.py`:

```python
INSTALLED_APPS = [
    # Default apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Your app
    'appname',
]
```

---

## **9. Make Migrations**

If you’ve defined models, apply migrations to set up your database:

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## **10. Create a Superuser (Optional)**

To access the admin panel, create a superuser:

```bash
python manage.py createsuperuser
```

---

## **11. Develop Your Application**

- Add views in `views.py`.
- Map URLs in `urls.py`.
- Customize templates and static files as needed.

---
