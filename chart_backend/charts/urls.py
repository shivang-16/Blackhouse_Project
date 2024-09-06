from django.urls import path
from . import views

urlpatterns = [
    path('api/candlestick-data/', views.CandlestickDataView.as_view(), name='candlestick-data'),
    path('api/line-chart-data/', views.LineChartDataView.as_view(), name='line-chart-data'),
    path('api/bar-chart-data/', views.BarChartDataView.as_view(), name='bar-chart-data'),
    path('api/pie-chart-data/', views.PieChartDataView.as_view(), name='pie-chart-data'),
]
