const bcrypt = require("bcrypt-nodejs");
const Subject = require("../models/subject");

const getSubjects = (req, res) => {
    Subject.find().then((sbjcts) => {
        !Subject
            ? res.status(404).send({ message: "No se ha encontrado ninguna materia" })
            : res.status(200).send({ sbjcts });
    });
};



const bcrypt = require("bcrypt-nodejs");
const Subject = require("../models/subject");

const postSubject = (req, res) => {
    const subject = new Subject();
    const {
        department, academic_activity, activity_code, number_credits, piaa_version, piaa_status,
        file_number, file_date, theory_hours, offsite_hours, hoursnon_attendance_reprovals, last_chance,
        duration_semester, practical_hours, presential_teacher_hours, maximum_quotas, passing_score, weeks_duration
    } = req.body;
    subject.department = department;
    subject.academic_activity = academic_activity
    subject.activity_code = activity_code
    subject.number_credits = number_credits
    subject.piaa_version = piaa_version
    subject.piaa_status = piaa_status
    subject.file_number = file_number
    subject.file_date = file_date
    subject.theory_hours = theory_hours
    subject.offsite_hours = offsite_hours
    subject.hoursnon_attendance_reprovals = hoursnon_attendance_reprovals
    subject.last_chance = last_chance
    subject.duration_semester = duration_semester
    subject.practical_hours = practical_hours
    subject.presential_teacher_hours = presential_teacher_hours
    subject.maximum_quotas = maximum_quotas
    subject.passing_score = passing_score
    subject.weeks_duration = weeks_duration


    if (!department ||
        !academic_activity ||
        !activity_code ||
        !number_credits ||
        !piaa_status ||
        !piaa_version ||
        !file_number ||
        !file_date ||
        !theory_hours ||
        !offsite_hours ||
        !hoursnon_attendance_reprovals ||
        !last_chance ||
        !duration_semester ||
        !practical_hours ||
        !presential_teacher_hours ||
        !maximum_quotas ||
        passing_score ||
        !weeks_duration) {
        res.status(404).send({ message: "Todos los campos son obligatorios" });
    } else {
        subject.save((err, subjectStored) => {
            if (err) {
                res.status(500).send({ message: "La asignatura ya existe." });
            } else {
                if (!subjectStored) {
                    res.status(404).send({ message: "Error al crear la asignatura." });
                } else res.status(200).send({ subject: subjectStored });
            }
        });
    }
};

async function updateSubject(req, res) {
    let subjectData = req.body;
    const params = req.params;

    Subject.findByIdAndUpdate(
        { _id: params.id },
        subjectData,
        (err, subjectUpdate) => {
            err
                ? res.status(500).send({ message: "Error del servidor." })
                : !subjectUpdate
                    ? res.status(404).send({ message: "No se encontro la asignatura que quiere actualizar." })
                    : res
                        .status(200)
                        .send({ message: "Asignatura actualizada correctamente." });
        }
    );
}

const deleteSubject = (req, res) => {
    const { id } = req.params;

    Subject.findByIdAndRemove(id, (err, SubjectDeleted) => {
        err
            ? res.status(500).send({ message: "Error del servidor." })
            : !SubjectDeleted
                ? res.status(404).send({ message: "Asignatura no encontrada." })
                : res
                    .status(200)
                    .send({ message: "La asinatura ha sido eliminada correctamente." });
    });
};

const filterByPIAAVersion = (req, res) => {
    const piaaVersion = req.params.piaaV;

    Subject.find({ 'piaa_version': piaaVersion })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
}

module.exports = {
    postSubject,
    getSubjects,
    updateSubject,
    deleteSubject,
    filterByPIAAVersion
};