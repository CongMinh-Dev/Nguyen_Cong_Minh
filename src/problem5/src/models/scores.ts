import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { student, studentId } from './student';

export interface scoresAttributes {
  id_student: number;
  maths?: number;
  physics?: number;
  chemistry?: number;
  biology?: number;
  literature?: number;
}

export type scoresPk = "id_student";
export type scoresId = scores[scoresPk];
export type scoresOptionalAttributes = "maths" | "physics" | "chemistry" | "biology" | "literature";
export type scoresCreationAttributes = Optional<scoresAttributes, scoresOptionalAttributes>;

export class scores extends Model<scoresAttributes, scoresCreationAttributes> implements scoresAttributes {
  id_student!: number;
  maths?: number;
  physics?: number;
  chemistry?: number;
  biology?: number;
  literature?: number;

  // scores belongsTo student via id_student
  id_student_student!: student;
  getId_student_student!: Sequelize.BelongsToGetAssociationMixin<student>;
  setId_student_student!: Sequelize.BelongsToSetAssociationMixin<student, studentId>;
  createId_student_student!: Sequelize.BelongsToCreateAssociationMixin<student>;

  static initModel(sequelize: Sequelize.Sequelize): typeof scores {
    return scores.init({
    id_student: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'student',
        key: 'id_student'
      }
    },
    maths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    physics: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chemistry: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    biology: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    literature: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'scores',
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
