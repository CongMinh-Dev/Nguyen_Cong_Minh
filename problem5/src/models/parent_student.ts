import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { student, studentId } from './student';

export interface parent_studentAttributes {
  id_student: number;
  father_name?: string;
  father_telephone?: string;
  mother_name?: string;
  mother_telephone?: string;
}

export type parent_studentPk = "id_student";
export type parent_studentId = parent_student[parent_studentPk];
export type parent_studentOptionalAttributes = "father_name" | "father_telephone" | "mother_name" | "mother_telephone";
export type parent_studentCreationAttributes = Optional<parent_studentAttributes, parent_studentOptionalAttributes>;

export class parent_student extends Model<parent_studentAttributes, parent_studentCreationAttributes> implements parent_studentAttributes {
  id_student!: number;
  father_name?: string;
  father_telephone?: string;
  mother_name?: string;
  mother_telephone?: string;

  // parent_student belongsTo student via id_student
  id_student_student!: student;
  getId_student_student!: Sequelize.BelongsToGetAssociationMixin<student>;
  setId_student_student!: Sequelize.BelongsToSetAssociationMixin<student, studentId>;
  createId_student_student!: Sequelize.BelongsToCreateAssociationMixin<student>;

  static initModel(sequelize: Sequelize.Sequelize): typeof parent_student {
    return parent_student.init({
    id_student: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'student',
        key: 'id_student'
      }
    },
    father_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    father_telephone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mother_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mother_telephone: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'parent_student',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_student" },
        ]
      },
    ]
  });
  }
}
