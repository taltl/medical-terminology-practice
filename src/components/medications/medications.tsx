import React from "react";
import data from "../../data.json";
import classes from "./medications.module.scss";
import { Link } from "react-router-dom";
import globalClasses from "./../../global.module.scss";

const Medications: React.FC = () => {
  return (
    <>
      <div className={globalClasses.back}>
        <Link to="/medical-terminology-practice">חזרה</Link>
      </div>
      <div className={classes.medications}>
        <h2>משפחות של תרופות</h2>
        {data.medicationsFamilies.map((medicationsFamily) => {
          return (
            <div className={classes.medication}>
              <span className={classes.name}>
                {"- " + medicationsFamily.name}
              </span>
              <br></br>
              <span className={classes.meaning}>
                {medicationsFamily.meaning}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Medications;
