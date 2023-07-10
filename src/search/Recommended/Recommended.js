import Button from "../../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
    return (
        <>
            <div>
                <h2 className="recommended-title">Recommended</h2>
                <div className="recommended-flex">
                    <Button onClickHandler={handleClick} value="" title="All Products" />
                    <Button onClickHandler={handleClick} value="Jordan 1" title="Jordan 1" />
                    <Button onClickHandler={handleClick} value="Jordan 4" title="Jordan 4" />
                    <Button onClickHandler={handleClick} value="Dunk" title="Dunk" />
                    <Button onClickHandler={handleClick} value="Yeezy" title="Yeezy" />
                </div>
            </div>
        </>
    );
};

export default Recommended;