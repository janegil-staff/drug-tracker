import { getTotalSum } from "../../util/helpers";
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
            <td>{val.type}</td>
            <td>
              {val.totalAmount} {val.type === "Benzodiasapine" ? " stk" : " gr"}
            </td>
            <td>{val.totalCost}.-</td>
          </tr>
        ))}
      </table>
      <div className="entries-detail-hr">
        <hr />
      </div>

      <div className="entries-total-sum">
        <p>
          Total money spent: {getTotalSum(values)}.-
        </p>
      </div>
    </section>
  );
};

export default EntryDetails;
