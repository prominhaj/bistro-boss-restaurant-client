import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const DashBoardTable = ({
  data,
  header1,
  header2,
  header3,
  header4,
  header5,
  item1BodyTemp,
  item2BodyTemp,
  item3BodyTemp,
  item4BodyTemp,
  item5BodyTemp,
}) => {
  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  return (
    <div>
      <DataTable
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        paginatorLeft={paginatorLeft}
        paginatorRight={paginatorRight}
        value={data}
        pt={{
          headerRow: {
            className: "!bg-[#D1A054] !rounded-tl-[15px] !rounded-tr-[15px]",
          },
          bodyRow: { className: "!py-5 border-b border-gray-200" },
        }}
        tableStyle={{ minWidth: "60rem" }}
      >
        <Column header={header1} body={item1BodyTemp}></Column>
        <Column header={header2} body={item2BodyTemp}></Column>
        <Column header={header3} body={item3BodyTemp}></Column>
        <Column header={header4} body={item4BodyTemp}></Column>
        {header5 && <Column header={header5} body={item5BodyTemp}></Column>}
      </DataTable>
    </div>
  );
};

export default DashBoardTable;
