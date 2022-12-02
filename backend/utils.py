from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

ORIGINS = [
    "http://localhost:3000",
    "localhost:3000",
    "http://127.0.0.1:3000"
]

EXPOSE_HEADERS = {
    "Access-Control-Allow-Headers": "X-Requested-With,content-type, Accept,Origin",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true"
}

ALLOW_METHODS = ["GET", "POST", "PUT", "DELETE"]


def set_cors_middleware(app: FastAPI) -> None:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=ORIGINS,
        allow_credentials=True,
        allow_methods=ALLOW_METHODS,
        allow_headers=["*"],
        expose_headers=EXPOSE_HEADERS
    )