import {HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Artist } from "../model/artists.model";
import { UpdateArtistDto } from "./dto/update-artist.dto";
import { IArtist } from "src/interface/interface";


@Injectable()
export class ArtistService{
    constructor(@InjectModel('artists') private artistModel: Model<Artist>){}

    async getAllService():Promise<Object>{
        const data = await this.artistModel.find()
        return  { status: HttpStatus.OK, data }
    }

    async getByIdService(id:string):Promise<Object>{
        const artist = await this.artistModel.findById(id)
        if(!artist){
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        return   { status: HttpStatus.OK, artist }
    }

    async createService(data:IArtist):Promise<Object>{
        const artist = new this.artistModel(data)
        await artist.save()
        return { status: HttpStatus.CREATED, message:'Created' }
    }
    async updatedService(id:string , data :UpdateArtistDto):Promise<Object>{
        const currentArtist = await this.artistModel.findById(id)
        if(!currentArtist){
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        const newartist = {...currentArtist , data}
        const artist =  await this.artistModel.findByIdAndUpdate(id, newartist)
        return { status: HttpStatus.OK, message: artist }
    }

    async deletedService(id:string):Promise<Object>{
        const currentArtist = await this.artistModel.findById(id)
        if(!currentArtist){
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        await this.artistModel.findByIdAndDelete(id)
        return { status: HttpStatus.OK, id }
    }
}