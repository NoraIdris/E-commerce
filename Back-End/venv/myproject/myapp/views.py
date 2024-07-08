from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .products import products

@api_view(['GET'])
def getRoutes(request):
    return Response('Hello World')

@api_view(['GET'])
def getProducts(request):
    return Response(products)

