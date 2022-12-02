from fastapi import FastAPI
from utils import set_cors_middleware
import uvicorn

app = FastAPI()
set_cors_middleware(app=app)


@app.get("/users")
def read_users():
    return {
        "users": [
            {
                "name":"Name 1", 
                "status": "admin"    
            }
        ]
    } 


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, log_level="info")