import "./EntryDetails.css";

const EntryDetails = (props) => {
  const { values } = props;

  return (
    <section>
      <table className="entry-details entry-details__container">
        <tr>
        <th>Type</th>
        <th>Total Amount</th>
        <th>Total cost</th>
        </tr>
      {values.map((val) => (
        <tr>
          <td>
          {val.type}
          </td>
          <td>
            {val.totalAmount} gr
          </td>
          <td>
           {val.totalCost} kr
          </td>
        </tr>
      ))}
      </table>
      <div></div>
    </section>
  );
};

export default EntryDetails;
