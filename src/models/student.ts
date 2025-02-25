import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { parent_student, parent_studentCreationAttributes, parent_studentId } from './parent_student';
import type { scores, scoresCreationAttributes, scoresId } from './scores';

export interface studentAttributes {
  id_student: number;
  email?: string;
  full_name?: string;
  age?: number;
}

export type studentPk = "id_student";
export type studentId = student[studentPk];
export type studentOptionalAttributes = "id_student" | "email" | "full_name" | "age";
export type studentCreationAttributes = Optional<studentAttributes, studentOptionalAttributes>;

export class student extends Model<studentAttributes, studentCreationAttributes> implements studentAttributes {
  id_student!: number;
  email?: string;
  full_name?: string;
  age?: number;

  // student hasOne parent_student via id_student
  parent_student!: parent_student;
  getParent_student!: Sequelize.HasOneGetAssociationMixin<parent_student>;
  setParent_student!: Sequelize.HasOneSetAssociationMixin<parent_student, parent_studentId>;
  createParent_student!: Sequelize.HasOneCreateAssociationMixin<parent_student>;
  // student hasOne scores via id_student
  score!: scores;
  getScore!: Sequelize.HasOneGetAssociationMixin<scores>;
  setScore!: Sequelize.HasOneSetAssociationMixin<scores, scoresId>;
  createScore!: Sequelize.HasOneCreateAssociationMixin<scores>;

  static initModel(sequelize: Sequelize.Sequelize): typeof student {
    return student.init({
    id_student: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    full_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'student',
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
