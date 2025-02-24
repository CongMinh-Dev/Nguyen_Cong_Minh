import initModels from "../models/init-models";
import sequelize from "../models/connect";
import { response } from "../config/response";
import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Joi, { number } from 'joi';

const model = initModels(sequelize)
// create
const createStudent = async (req: Request, res: Response) => {
    // validate
    const schema = Joi.object({
        email: Joi.string().email().required(),
        full_name: Joi.string().required(),
        age: Joi.number().required(),

    });
    const { error } = schema.validate(req.body);
    if (error) {
        response(res, "", error.details[0].message, 400)
        return
    }

    interface studentType {
        email: string;
        full_name: string;
        age: number;
    }
    let { email, full_name, age } = req.body;
    let student: studentType = {
        email: email,
        full_name: full_name,
        age: age,

    }

    let checkEmail = await model.student.findOne({
        where: { email: student.email }
    })

    if (checkEmail) {
        response(res, "", "Email already exists", 400)
        return
    }
    if (typeof full_name !== 'string') {
        res.status(400).json({ error: 'full_name must be a string' });
        return
    }

    let newData = {
        email: student.email,
        full_name: student.full_name,
        age: student.age,
    }
    await model.student.create(newData);
    response(res, "", "Create successful", 200)
}

// get all student
const getAllStudent = async (req: Request, res: Response) => {
    let data = await model.student.findAll()
    response(res, data, "Successful", 200)

}

// Pagination
const getStudentPage = async (req: Request, res: Response) => {


    let { pageStr, pageSizeStr } = req.params
    let page = +pageStr;
    if (page <= 0) {
        response(res, "", "Page must be larger than 0", 400)
        return
    }
    let pageSize = +pageSizeStr;



    // validate
    let validate = {
        page: page,
        pageSize: pageSize
    }
    const schema = Joi.object({
        page: Joi.number().required(),
        pageSize: Joi.number().required(),

    });
    const { error } = schema.validate(validate);
    if (error) {
        // response(res, "", "Page and pageSize must be a number", 400)
        response(res, "", error.details[0].message, 400)

        return
    }




    let index = (page - 1) * pageSize
    let data = await model.student.findAll({
        offset: index,
        limit: pageSize,
    })
    let totalStudent = await model.student.count();
    let totalPage = Math.ceil(totalStudent / pageSize)
    if (page > totalPage || page <= 0) {
        response(res, "", "Pages more than total pages", 400)
        return
    }

    response(res, { data, totalPage }, "Successful", 200)

}

// get student by id
const getStudentById = async (req: Request, res: Response) => {
    let { id } = req.params
    let idNumber: number = +id
    // validate
    const schema = Joi.number();
    const { error } = schema.validate(idNumber);
    if (error) {
        response(res, "", "ID must be a number", 400)
        return
    }

    let arrStudent = await model.student.findAll({ attributes: ['id_student'] })
    let index = arrStudent.findIndex((item) => {
        return idNumber == item.dataValues.id_student
    })
    if (index != -1) {
        let data = await model.student.findByPk(id)
        response(res, data, "Successful", 200)
    } else { response(res, "", "ID is invalid ", 401) }

}

// get student by name
const findStudent = async (req: Request, res: Response) => {
    let { full_name } = req.headers
    let data = await model.student.findAll({
        where: {
            full_name: {
                [Op.like]: `%${full_name}%`
            }
        }
    })
    response(res, data, "Successful", 200)
}

// get details of student 
const getDetailStudent = async (req: Request, res: Response) => {
    let { full_name } = req.headers

    let data = await model.student.findAll({
        where: {
            full_name: {
                [Op.like]: `%${full_name}%`
            }
        },
        include: ["parent_student", "score"],
    })
    response(res, data, "Successful", 200)
}

// update scores of student 
const updateScores = async (req: Request, res: Response) => {
    // validate
    const schema = Joi.object({
        id_student: Joi.number().required(),
        maths: Joi.number().required(),
        physics: Joi.number().required(),
        chemistry: Joi.number().required(),
        biology: Joi.number().required(),
        literature: Joi.number().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        response(res, "", error.details[0].message, 400)
        return
    }

    let { id_student, maths, physics, chemistry, biology, literature } = req.body
    // ID is invalid
    let arrStudent = await model.student.findAll({ attributes: ['id_student'] })
    let index = arrStudent.findIndex((item) => {
        return id_student == item.dataValues.id_student
    })
    if (index != -1) {
        let scores = {
            maths: maths,
            physics: physics,
            chemistry: chemistry,
            biology: biology,
            literature: literature,

        }
        model.scores.update(scores, {
            where: { id_student: id_student }
        })
        response(res, "", "Update scores Successful", 200)

    } else { response(res, "", "ID is invalid ", 401) }

}

// Delete student by id
const deleteStudent = async (req: Request, res: Response) => {
    let { id } = req.params

    let isDelete = await model.student.destroy({
        where: {
            id_student: id
        },

    })
    // ID is invalid
    if (isDelete == 0) {
        response(res, "", "Not found", 400)
        return
    }
    response(res, "", "Delete student Successful", 200)

}



export {

    createStudent,
    getAllStudent,
    getStudentPage,
    getStudentById,
    findStudent,
    getDetailStudent,
    updateScores,
    deleteStudent

}
// get all student
// const getAllStudent = async (req:Request, res:Response) => {
//     let data = await model.student.findAll()
//     response(res, data, "Successful", 200)

// }