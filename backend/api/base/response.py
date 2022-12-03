from rest_framework.response import Response
from rest_framework import status


class CustomResponse:
    @staticmethod
    def make_response(data: dict = None, status_code=status.HTTP_200_OK, message: str = None, error: bool = False
                      ) -> Response:
        if error:
            status_code = status.HTTP_400_BAD_REQUEST

        response = {
            "error": error,
            "message": message,
            "data": data,
            "status_code": status_code
        }

        return Response(data=response, status=status_code)

    @staticmethod
    def make_response_data(data: dict = None, message: str = None, error: bool = False):
        response = {
            "error": error,
            "message": message,
            "data": data,
            "status_code": '200'
        }
        return response
