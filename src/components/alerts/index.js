import { useNavigate } from "react-router-dom";
import Edit from "../../assets/edit.svg";
import * as S from "./styled";

const Alerts = ({ alerts, profile }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/experience/?id=${id}?is_edit=true`);
  };
  return (
    <S.Alerts>
      <div className="story-section">
        <h1>Alerts</h1>
        {Array.isArray(alerts) &&
          alerts?.length > 0 &&
          alerts?.map((alert) => (
            <div className="story" key={alert}>
              {alert?.profile?._id === profile?._id ? (
                <img
                  className="edit"
                  onClick={() => handleEdit(alert?._id)}
                  src={Edit}
                  alt="edit"
                />
              ) : (
                ""
              )}

              <label htmlFor="h1" className="label">
                story:
              </label>
              <p>{alert?.description}</p>
            </div>
          ))}
      </div>
    </S.Alerts>
  );
};

export default Alerts;
