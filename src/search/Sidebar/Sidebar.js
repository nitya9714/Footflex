import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
    return (
        <>
            <section className="sidebar">
                {/* <div className="logo-container">
                    <h1>🛒</h1>
                </div> */}
                <h1>Filters</h1>
                <Category handleChange={handleChange} />
                <Colors handleChange={handleChange} />
                <Price handleChange={handleChange} />
            </section>
        </>
    );
};

export default Sidebar;