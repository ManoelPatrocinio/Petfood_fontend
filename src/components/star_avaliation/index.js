import "./styler.css";

const StarAvaliation = (avalation) => {
  return (
    <div className="estrelas">
      <input type="radio" id="cm_star-empty" name="fb" value="" checked />
      <label for="cm_star-1">
        <i className="fa"></i>
      </label>
      <input type="radio" id="cm_star-1" name="fb" value="1" />
      <label for="cm_star-2">
        <i className="fa"></i>
      </label>
      <input type="radio" id="cm_star-2" name="fb" value="2" />
      <label for="cm_star-3">
        <i className="fa"></i>
      </label>
      <input type="radio" id="cm_star-3" name="fb" value="3" />
      <label for="cm_star-4">
        <i className="fa"></i>
      </label>
      <input type="radio" id="cm_star-4" name="fb" value="4" />
      <label for="cm_star-5">
        <i className="fa"></i>
      </label>
      <input type="radio" id="cm_star-5" name="fb" value="5" />
    </div>
  );
};

export default StarAvaliation;
