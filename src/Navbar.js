import './Navbar.css';
import { useState } from 'react';
const Navbar = ({ searchbtn }) => {
    const [search, setSearch] = useState()
    return (
        <div class="main-navbar shadow-sm sticky-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                        <h5 class="brand-name">FootFlex</h5>
                    </div>
                    <div class="col-md-5 my-auto">
                        <form role="search">
                            <div class="input-group">
                                <input type="text" placeholder="Search your product" class="form-control" />
                                <button type="submit">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-5 my-auto">
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">All Products</a>
                            </li>
                            {/* </ul>
                    </div>
                    <div class="col-md-5 my-auto">
                        <ul class="nav justify-content-end"> */}

                            <li class="nav-item">
                                <a class="nav-link" href="/cart">
                                    <i class="fa fa-shopping-cart"></i> Cart (0)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;