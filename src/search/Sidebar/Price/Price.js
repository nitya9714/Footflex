import Input from "../../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
    return (
        <>
            <div className="list">
                <h2 className="sidebar-title price-title">Price</h2>
                <div className="listing">
                    <label className="sidebar-label-container">
                        <input onChange={handleChange} type="radio" value="" name="test2" />
                        <span className="checkmark"></span>All
                    </label>


                    <Input
                        handleChange={handleChange}
                        value={"$100"}
                        title="$50 - $100"
                        name="test2"
                    />

                    <Input
                        handleChange={handleChange}
                        value={"$150"}
                        title="$100 - $150"
                        name="test2"
                    />

                    <Input
                        handleChange={handleChange}
                        value={"$200"}
                        title="Over $150"
                        name="test2"
                    />
                </div>
            </div>
        </>
    );
};

export default Price;