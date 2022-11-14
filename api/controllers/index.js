import { diffHours } from "../helpers/index.js"
import { Employee } from "../models/Employee.js"


export const employeeRegister = async (req,res) => {
    const {name, surname, dni} = req.body
    try {
        const employee = new Employee({name, surname, dni})
        await employee.save()
        res.json({msg: "Empleado registrado correctamente"})
    } catch (error) {
        console.log(error)
    }
}


export const employeeEntry = async (req,res) => {
    const {dni, entryDate} = req.body


    try {

        if(!dni) {
            res.status(400).json({msg: "Es requerido ingresar el dni"})
            return
        }

        if(!entryDate){
            res.status(400).json({msg: "Es requerido ingresar una fecha y hora de ingreso"})
            return
        }

        const employee = await Employee.findOne({dni}, {__v: 0})

        if(!employee) {
            res.status(404).json({msg: "Empleado no encontrado"})
            return
        }


        if(employee.entryDate){
            res.status(400).json({msg: "El empleado ya se encuentra trabajando"})
            return
        }
        employee.entryDate = entryDate;
        employee.save()
        res.json({msg: 'Ingreso registrado correctamente'})
    } catch (error) {
        console.log(error)
    }
}

export const employeeExit = async (req, res) => {
    const {dni, exitDate} = req.body


    try {

        if(!dni) {
            res.status(400).json({msg: "Es requerido ingresar el dni"})
            return
        }

        if(!exitDate){
            res.status(400).json({msg: "Es requerido ingresar una fecha y hora de egreso"})
            return
        }

        const employee = await Employee.findOne({dni}, {__v: 0})

        if(!employee) {
            res.status(404).json({msg: "Empleado no encontrado"})
            return
        }

        if(!employee.entryDate){
            res.status(400).json({msg: "El empleado no se encuentra trabajando"})
            return
        }

        const hoursWorked = Math.round(diffHours(new Date(exitDate), new Date(employee.entryDate)))

        if(hoursWorked < 0){
            res.status(400).json({msg: "La fecha de egreso no puede ser anterior a la de ingreso"})
            return
        }

        const workLogs = {
            exitDate,
            entryDate: employee.entryDate, 
            hoursWorked
        }

        employee.workLogs = [...employee.workLogs, workLogs]
        employee.entryDate = null;
        employee.save()

        res.json({msg: 'Egreso registrado correctamente', workLogs})

    } catch (error) {
        console.log(error)
    }
}

export const employeeList = async (req, res) => {
    Employee.find({entryDate: {$ne: null}},  {__v: 0}).sort({name: 'asc'}).lean().exec(function (err, employees) {
        return res.end(JSON.stringify(employees));
    });
}