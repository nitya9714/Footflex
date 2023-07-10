import "./Category.css";
import Input from "../../../components/Input";

function Category({ handleChange }) {
    return (
        <div className="list">
            <h2 className="sidebar-title">Category</h2>

            <div className="listing">
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>All
                </label>
                <Input
                    handleChange={handleChange}
                    value="High"
                    title="High"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="Low"
                    title="Low"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="Slide"
                    title="Slide"
                    name="test"
                />
            </div>
        </div>
    );
}

export default Category;