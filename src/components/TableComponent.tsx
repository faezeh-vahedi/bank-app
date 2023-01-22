interface DataType {
  column: { id: number; title: string; accessor: string; style: Object }[];
  data: any[];
}

const TableComponent = (props: DataType) => {
  console.log(props.data);

  return (
    <>
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-primary text-center">
                      {props.column.map((column) => {
                        return (
                          <th
                            key={column.id}
                            className="
                                    text-lg
                                    font-semibold
                                    text-black
                                    py-4
                                    lg:py-7
                                    px-3
                                    lg:px-4
                                    border-l border-transparent
                                      "
                            style={column.style}
                          >
                            {column.title}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {props.data.map((data: any) => {
                      return (
                        <tr
                          key={data.id}
                          className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              bg-[#F3F6FF]
                              border-b border-l border-[#E8E8E8]
                              "
                        >
                          {Object.values(data).map((row: any) => {
                            return <th key="d">{row}</th>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TableComponent;
