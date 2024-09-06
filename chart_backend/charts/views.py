from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CandlestickDataView(APIView):
    def get(self, request):
        data = {
            "data": [
                {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
                {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
                {"x": "2023-01-03", "open": 40, "high": 50, "low": 35, "close": 45},
                {"x": "2023-01-04", "open": 45, "high": 55, "low": 40, "close": 50},
                {"x": "2023-01-05", "open": 50, "high": 60, "low": 45, "close": 55},
                {"x": "2023-01-06", "open": 55, "high": 65, "low": 50, "close": 60},
                {"x": "2023-01-07", "open": 60, "high": 70, "low": 55, "close": 65},
            ]
        }
        return Response(data, status=status.HTTP_200_OK)


class LineChartDataView(APIView):
    def get(self, request):
        data = {
            "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            "data": [10, 20, 30, 40, 50, 60, 70, 80]  
        }
        return Response(data, status=status.HTTP_200_OK)


class BarChartDataView(APIView):
    def get(self, request):
        data = {
            "labels": ["Product A", "Product B", "Product C", "Product D", "Product E"],
            "data": [100, 150, 200, 250, 300]  
        }
        return Response(data, status=status.HTTP_200_OK)


class PieChartDataView(APIView):
    def get(self, request):
        data = {
            "labels": ["Red", "Blue", "Yellow", "Green", "Purple"],
            "data": [300, 50, 100, 150, 200]  
        }
        return Response(data, status=status.HTTP_200_OK)
