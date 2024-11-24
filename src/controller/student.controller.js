import {
    getAllStudentsService,
    getPageStudentsService,
    filterStudentsService,
    searchStudentsService,
    getByIdStudentsService,
    updateStudentsService,
    deleteStudentsService,
} from "../services/index"
import { StudentsValidation } from "../validation/index.js"

export const getAllStudents = async (req, res, next) => {
    try {
        const Students = await getAllStudentsService()
        return res.status(200).send({ status: "Success", data: Students })
    } catch (error) {
        next(error)
    }
}

export const getByIdStudents = async (req, res, next) => {
    try {
        const Students = await getByIdStudentsService(req.params.id)
        if (!Students) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        return res.status(200).send({ status: "Success", data: Students })
    } catch (error) {
        next(error)
    }
}

export const searchStudents = async (req, res, next) => {
    try {
        const search = req.query.name || ""
        const Students = await searchStudentsService(search)
        if (!Students) {
            return res.status(404).send({ msg: "Malumot Topilmadi" })
        }
        return res.status(200).send({ status: "Success", data: Students })
    } catch (error) {
        next(error)
    }
}
export const filterStudents = async (req, res, next) => {
    try {
        const Students = await filterStudentsService(...req.query)
        if (!Students) {
            return res.status(404).send({ msg: "Malumot Topilmadi" })
        }
        return res.status(200).send({ status: "Success", data: Students })
    } catch (error) {
        next(error)
    }
}
export const getPageStudents = async (req, res, next) => {
    try {
        const { page, limit } = req.query
        const skip = (page - 1) * limit
        const Students = await getPageStudentsService(skip,limit)
        return res.status(200).send({ status: "Success", data: Students })
    } catch (error) {
        next(error)
    }
}

export const createStudents = async (req, res, next) => {
    try {
        const { error, value } = StudentsValidation(req.body)
        if (error) {
            return res
                .status(400)
                .send({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" })
        }
        const adress = new createStudentsService(...req.body)
        return res.status(201).send({
            status: "Created",
            data: adress,
        })
    } catch (error) {
        next(new ApiError(error.statusCode, error.messages))
    }
}


export const updateStudents = async (req, res, next) => {
    try {
        const Students = await getByIdStudentsService(req.params.id)
        if (!Students) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        const newStudentsData = { ...Students._doc, ...req.body }
        const newStudents = await updateStudentsService(req.params.id, newStudentsData)
        return res.status(200).send({ status: "Success", id: newStudents.id })
    } catch (error) {
        next(error)
    }
}

export const deleteStudents = async (req, res, next) => {
    try {
        const Students = await getByIdStudentsService(req.params.id)
        if (!Students) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        const deleteStudents = await deleteStudentsService(req.params.id)
        return res.status(200).send({ status: "Success", id: deleteStudents.id })
    } catch (error) {
        next(error)
    }
}
