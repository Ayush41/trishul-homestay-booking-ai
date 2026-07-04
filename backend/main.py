from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session
from sqlalchemy import and_
from database import SessionLocal
from models import Room as RoomModel
from models import Booking as BookingModel
from datetime import datetime

from models import User as UserModel



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Global Exception Handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"message": str(exc)}
    )


class Room(BaseModel):
    id: int
    name: str
    description: str
    image: str
    price: int
    rating: float
    

class AvailabilityRequest(BaseModel):
    room_id: int
    check_in: datetime
    check_out: datetime
    guests: int
    

    
class BookingRequest(BaseModel):
    guestName: str
    email: str
    roomId: int
    userId: int
    checkIn: datetime
    checkOut: datetime
    guests: int
    
    
class RegisterRequest(BaseModel):
    fullName: str
    email: str
    password: str


class LoginRequest(BaseModel):
    email: str
    password: str


# GET ALL ROOMS
@app.get("/api/rooms", status_code=200)
def get_rooms():

    db: Session = SessionLocal()

    try:
        all_rooms = db.query(RoomModel).all()

        return [
            {
                "id": room.id,
                "name": room.name,
                "description": room.description,
                "image": room.image,
                "price": room.price,
                "rating": room.rating,
            }
            for room in all_rooms
        ]

    finally:
        db.close()


#search room#
# SEARCH ROOMS
from sqlalchemy import or_

@app.get("/api/rooms/search", status_code=200)
def search_rooms(q: str):

    db: Session = SessionLocal()

    try:
        rooms = db.query(RoomModel).filter(
            RoomModel.name.ilike(f"%{q}%")
        ).all()

        return [
            {
                "id": room.id,
                "name": room.name,
                "description": room.description,
                "image": room.image,
                "price": room.price,
                "rating": room.rating,
            }
            for room in rooms
        ]

    finally:
        db.close()




# GET SINGLE ROOM
@app.get("/api/rooms/{room_id}", status_code=200)
def get_room(room_id: int):

    db: Session = SessionLocal()

    try:
        room = db.query(RoomModel).filter(RoomModel.id == room_id).first()

        if not room:
            raise HTTPException(
                status_code=404,
                detail="Room not found"
            )

        return {
            "id": room.id,
            "name": room.name,
            "description": room.description,
            "image": room.image,
            "price": room.price,
            "rating": room.rating,
        }

    finally:
        db.close()


# CREATE ROOM
@app.post("/api/rooms", status_code=201)
def create_room(room: Room):

    db: Session = SessionLocal()

    try:
        existing_room = db.query(RoomModel).filter(RoomModel.id == room.id).first()

        if existing_room:
            raise HTTPException(
                status_code=400,
                detail="Room ID already exists"
            )

        new_room = RoomModel(
            id=room.id,
            name=room.name,
            description=room.description,
            image=room.image,
            price=room.price,
            rating=room.rating
        )

        db.add(new_room)
        db.commit()
        db.refresh(new_room)

        return {
            "message": "Room added successfully",
            "room": {
                "id": new_room.id,
                "name": new_room.name,
                "description": new_room.description,
                "image": new_room.image,
                "price": new_room.price,
                "rating": new_room.rating,
            }
        }

    finally:
        db.close()


# UPDATE ROOM
@app.put("/api/rooms/{room_id}", status_code=200)
def update_room(room_id: int, updated_room: Room):

    db: Session = SessionLocal()

    try:
        room = db.query(RoomModel).filter(RoomModel.id == room_id).first()

        if not room:
            raise HTTPException(
                status_code=404,
                detail="Room not found"
            )

        room.name = updated_room.name
        room.description = updated_room.description
        room.image = updated_room.image
        room.price = updated_room.price
        room.rating = updated_room.rating

        db.commit()
        db.refresh(room)

        return {
            "message": "Room updated successfully",
            "room": {
                "id": room.id,
                "name": room.name,
                "description": room.description,
                "image": room.image,
                "price": room.price,
                "rating": room.rating
            }
        }

    finally:
        db.close()


# DELETE ROOM
@app.delete("/api/rooms/{room_id}", status_code=200)
def delete_room(room_id: int):

    db: Session = SessionLocal()

    try:
        room = db.query(RoomModel).filter(RoomModel.id == room_id).first()

        if not room:
            raise HTTPException(
                status_code=404,
                detail="Room not found"
            )

        db.delete(room)
        db.commit()

        return {
            "message": "Room deleted successfully"
        }

    finally:
        db.close()


#availability of room checking#
@app.post("/api/check-availability", status_code=200)
def check_availability(request: AvailabilityRequest):
    db: Session = SessionLocal()
    try:
        existing_booking = db.query(BookingModel).filter(
            and_(
                BookingModel.roomId == request.room_id,
                BookingModel.checkIn < request.check_out,
                BookingModel.checkOut > request.check_in
            )
        ).first()
        
        if existing_booking:
            return {
                "available": False,
                "message": "Room is already booked for the selected dates."
    }
        return {
                "available": True,
                "message": "Room is available for booking."
            }
    finally:
        db.close()
    

#--------booking a room----------#
@app.post("/api/book-room", status_code=201)
def book_room(request: BookingRequest):

    db: Session = SessionLocal()

    try:
        new_booking = BookingModel(
            guestName=request.guestName,
            email=request.email,
            roomId=request.roomId,
            checkIn=request.checkIn,
            checkOut=request.checkOut,
            guests=request.guests,
            userId=request.userId
        )

        db.add(new_booking)
        db.commit()
        db.refresh(new_booking)

        return {
            "message": "Booking confirmed successfully!",
            "bookingId": new_booking.id
        }

    finally:
        db.close()
        
     
#-----------------user registration----------------#   
@app.post("/api/register", status_code=201)
def register(request: RegisterRequest):

    db: Session = SessionLocal()

    try:
        existing_user = db.query(UserModel).filter(
            UserModel.email == request.email
        ).first()

        if existing_user:
            raise HTTPException(
                status_code=400,
                detail="Email already registered."
            )

        new_user = UserModel(
            fullName=request.fullName,
            email=request.email,
            password=request.password
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return {
            "message": "Registration successful.",
            "userId": new_user.id
        }

    finally:
        db.close()
        
        
        
 #-----------------user login----------------#       
@app.post("/api/login", status_code=200)
def login(request: LoginRequest):

    db: Session = SessionLocal()

    try:
        user = db.query(UserModel).filter(
            UserModel.email == request.email
        ).first()

        if not user:
            raise HTTPException(
                status_code=401,
                detail="Invalid email or password."
            )

        if user.password != request.password:
            raise HTTPException(
                status_code=401,
                detail="Invalid email or password."
            )

        return {
            "message": "Login successful.",
            "user": {
                "id": user.id,
                "fullName": user.fullName,
                "email": user.email
            }
        }

    finally:
        db.close()
        
        

@app.get("/api/users/{user_id}")
def get_user(user_id: int):

    db: Session = SessionLocal()

    try:
        user = db.query(UserModel).filter(UserModel.id == user_id).first()

        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        return {
            "id": user.id,
            "fullName": user.fullName,
            "email": user.email,
        }

    finally:
        db.close()
        
        
        
#-------- GET BOOKINGS OF A USER---------#
@app.get("/api/bookings/{user_id}", status_code=200)
def get_user_bookings(user_id: int):

    db: Session = SessionLocal()

    try:
        bookings = (
            db.query(BookingModel, RoomModel)
            .join(RoomModel, BookingModel.roomId == RoomModel.id)
            .filter(BookingModel.userId == user_id)
            .all()
        )

        return [
            {
                "id": booking.id,
                "guestName": booking.guestName,
                "email": booking.email,
                "roomId": room.id,
                "roomName": room.name,
                "roomPrice": room.price,
                "roomImage": room.image,
                "checkIn": booking.checkIn,
                "checkOut": booking.checkOut,
                "guests": booking.guests,
            }

            for booking, room in bookings
        ]

    finally:
        db.close()
        
        
#-----------------CANCEL BOOKING----------------#     
@app.delete("/api/bookings/{booking_id}", status_code=200)
def cancel_booking(booking_id: int):

    db: Session = SessionLocal()

    try:
        booking = db.query(BookingModel).filter(
            BookingModel.id == booking_id
        ).first()

        if not booking:
            raise HTTPException(
                status_code=404,
                detail="Booking not found."
            )

        db.delete(booking)
        db.commit()

        return {
            "message": "Booking cancelled successfully."
        }

    finally:
        db.close()