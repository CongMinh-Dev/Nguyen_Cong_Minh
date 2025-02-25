import type { Sequelize } from "sequelize";
import { parent_student as _parent_student } from "./parent_student";
import type { parent_studentAttributes, parent_studentCreationAttributes } from "./parent_student";
import { scores as _scores } from "./scores";
import type { scoresAttributes, scoresCreationAttributes } from "./scores";
import { student as _student } from "./student";
import type { studentAttributes, studentCreationAttributes } from "./student";

export {
  _parent_student as parent_student,
  _scores as scores,
  _student as student,
};

export type {
  parent_studentAttributes,
  parent_studentCreationAttributes,
  scoresAttributes,
  scoresCreationAttributes,
  studentAttributes,
  studentCreationAttributes,
};

export default  function initModels(sequelize: Sequelize) {
  const parent_student = _parent_student.initModel(sequelize);
  const scores = _scores.initModel(sequelize);
  const student = _student.initModel(sequelize);

  parent_student.belongsTo(student, { as: "id_student_student", foreignKey: "id_student"});
  student.hasOne(parent_student, { as: "parent_student", foreignKey: "id_student"});
  scores.belongsTo(student, { as: "id_student_student", foreignKey: "id_student"});
  student.hasOne(scores, { as: "score", foreignKey: "id_student"});

  return {
    parent_student: parent_student,
    scores: scores,
    student: student,
  };
}
