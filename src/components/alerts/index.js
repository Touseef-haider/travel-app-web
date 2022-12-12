import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Edit from "../../assets/edit.svg";
import * as S from "./styled";

const Alerts = () => {
  const navigate = useNavigate();
  const alerts = useSelector((state) => state?.alerts);
  const profile = useSelector((state) => state?.auth.user);

  const handleEdit = (id) => {
    navigate(`/experience/?id=${id}?is_edit=true`);
  };
  return (
    <S.Alerts>
      <div className="story-section">
        <h1>Alerts</h1>
        {alerts.map((alert) => (
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
