
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Room(Base):
    __tablename__ = "Room"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String)
    image = Column(String)
    price = Column(Integer)
    rating = Column(Float)
    
    
class Booking(Base):
    __tablename__ = "Booking"

    id = Column(Integer, primary_key=True, index=True)
    guestName = Column(String, nullable=False)
    email = Column(String, nullable=False)
    checkIn = Column(DateTime, nullable=False)
    checkOut = Column(DateTime, nullable=False)
    guests = Column(Integer, nullable=False)
    roomId = Column(Integer, ForeignKey("Room.id"), nullable=False)
    userId = Column(Integer, ForeignKey("User.id"), nullable=False)
    
    
class User(Base):
    __tablename__ = "User"

    id = Column(Integer, primary_key=True, index=True)
    fullName = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)