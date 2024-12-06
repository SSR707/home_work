import { Request, Response, NextFunction } from "express";
import {Person}  from "../model/person.model"
export const getAllData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Person.find();
    res.status(200).send({status: 'Success' , data});
  } catch (err) {
    next(err);
  }
};

export const getOneData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Person.findOne({_id:req.params.id});
    if(!data){
      res.status(200).send('Malumot topiladi');
    }
    res.status(200).send({status: 'Success' , data});
    res.status(200).send("Sucess");
  } catch (err) {
    next(err);
  }
};

export const createData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const author = new Person(req.body);
    await author.save();
    res.status(200).send({status:'Created'});
  } catch (err) {
    next(err);
  }
};

export const updateData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Person.findOne({_id:req.params.id});
    if (!data) {
      res.status(200).send({
        status: "Not Found",
      });
    }
    const updateData = { ...data, ...req.body };
    console.log(updateData);
    const user = await Person.findByIdAndUpdate(req.params.id, updateData);
    res.status(200).send({status:'Success' , id:req.params.id});
  } catch (err) {
    next(err);
  }
};

export const deleteData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Person.findOne({_id:req.params.id});
    if (!data) {
      res.status(200).send({
        status: "Not Found",
      });
    }
    const user = await Person.findByIdAndDelete(req.params.id);
    res.status(200).send({status:"Sucess" , id:req.params.id});
  } catch (err) {
    next(err);
  }
};
