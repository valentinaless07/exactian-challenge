import axios from "axios";
import { useEffect, useState } from "react";
import { getFullDate } from "../../helpers";
import { ListContainer } from "./style";

const List = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployeeList = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/list`
      );
      setEmployees(data);
    };
    getEmployeeList();
  }, []);

  return (
    <ListContainer>

          {employees.length > 0 && (
            <h1>Empleados trabajando en este momento</h1>
          )}

          {employees.length === 0 ? (
            <p>No hay empleados trabajando.</p>
          ) : (
            employees.map((employee) => (
              <div className="employee_info" key={employee._id}>
                <div>
                  <h2>Nombre y Apellido</h2>
                  <p>
                    {employee.name} {employee.surname}
                  </p>
                </div>

                <div className="info_date_container">
                  <h2>Fecha y hora de ingreso</h2>
                  <p>{getFullDate(employee.entryDate)}</p>
                </div>
              </div>
            ))
          )}
    </ListContainer>
  );
};

export default List;
