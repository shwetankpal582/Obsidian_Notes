---
tags:
  - backend
  - django
Date: 2024 - 12 - 13
Topic:
  - urls
  - routes
  - views
Subject: django
---

> [!url] Resource
> <iframe width="560" height="315" src="https://www.youtube.com/embed/ZW2FSxb_VEo?si=LnyJvCtG9Fa23Eut" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# URLs and Views
In Django, **views** and **URLs** are integral components of how the framework handles web requests and responses. Here's a detailed explanation:
### **1. Views in Django**

A **view** is a function or class-based logic in Django that handles requests and returns a response.

#### **Purpose of Views:**

- They act as the "*logic layer*" of your application.
- *Retrieve data* from the database (if needed).
- Process the data (if required).
- Render a response, which can be an HTML page, JSON, or any other data format.

#### **Types of Views:**

1. **Function-Based Views (FBVs):**
    
    - Defined as Python functions.
    - Example:
        
        ```python
        from django.http import HttpResponse
        
        def hello_world(request):
            return HttpResponse("Hello, world!")
        ```
        
2. **Class-Based Views (CBVs):**
    
    - Use Python classes to organize view logic.
    - Example:
        
        ```python
        from django.views import View
        from django.http import HttpResponse
        
        class HelloWorldView(View):
            def get(self, request):
                return HttpResponse("Hello, world!")
        ```
        

---

### **2. URLs in Django**

The **URLs** map specific web addresses (paths) to corresponding views. This is managed in the `urls.py` file.

#### **Purpose of URLs:**

- Define the routing logic of your web application.
- Ensure each request is directed to the appropriate view function or class.

#### **Example:**

In the `urls.py` file of your Django app or project:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello_world, name='hello'),  # Maps /hello/ to hello_world view
]
```

---

### **How Views and URLs Work Together**

1. A user sends a request to a specific URL.
2. Django's URL dispatcher matches the request to a route in the `urlpatterns`.
3. The route maps the URL to a specific view function or class.
4. The view processes the request and returns a response (e.g., HTML, JSON).

---

### **Complete Example**

#### **1. Define the View in `views.py`:**

```python
from django.http import HttpResponse

def home_page(request):
    return HttpResponse("Welcome to the Home Page!")
```

#### **2. Map the URL in `urls.py`:**

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='home'),  # Root URL
]
```

#### **3. Access in the Browser:**

When you visit `http://127.0.0.1:8000/`, the `home_page` view function is called, and "Welcome to the Home Page!" is displayed.

---

### **Key Notes:**

- URLs are declared in the `urls.py` file using the `path` or `re_path` method.
- Views contain the logic to handle the request and generate the appropriate response.
- URL patterns can include dynamic paths using `<int:id>` or `<str:slug>` for capturing variables. For example:
    
    ```python
    path('post/<int:id>/', views.post_detail, name='post_detail')
    ```
