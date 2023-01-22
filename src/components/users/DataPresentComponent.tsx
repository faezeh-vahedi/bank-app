import TableComponent from "../TableComponent";
import useUserData from "../hook/useUserData";
import { IServerResponse } from "../interfaces/user";

const DataPresentComponent = () => {
  const { loading, error, data } = useUserData();

  const column = [
    {
      id: 0,
      title: "ID",
      accessor: "id",
      style: {
        width: "5px",
      },
    },
    {
      id: 1,
      title: "First name",
      accessor: "firstName",
      style: {
        width: "50px",
      },
    },
    {
      id: 2,
      title: "Last name",
      accessor: "lastName",
      style: {
        width: "50px",
      },
    },
    {
      id: 3,
      title: "Age",
      accessor: "age",
      style: {
        width: "5px",
      },
    },
    {
      id: 4,
      title: "Phone",
      accessor: "phone",
      style: {
        width: "25px",
      },
    },
  ];

  const state = data.map((user: IServerResponse) => {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      phone: user.phone,
    };
  });

  if (loading)
    return (
      <>
        <p>loading</p>
      </>
    );

  return (
    <>
      {error ? (
        <div>Error occurred.</div>
      ) : (
        <TableComponent column={column} data={state} />
      )}
    </>
  );
};

export default DataPresentComponent;
