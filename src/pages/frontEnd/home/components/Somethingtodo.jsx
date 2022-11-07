import React from "react";
import Form from 'react-bootstrap/Form';
const Somethingtodo = () => {
    return (
        <div className="container sec-3 mt-2">
            <div className="something-feel" style={{ position: "relative", overflowX: "hidden" }}>
                <div className="somethingHighlight aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000"></div>
                <h2 className="cateTitle">SOMETHINGTODO WHEN YOU FEEL LIKE DOING IT </h2>
                <div className="this-weekend">  </div>
                <div className="categories">
                    <p className="all">ALL</p>
                    <p className="cate">THIS WEEEKEND</p>
                    <p className="cate">FREE</p>
                    <div className="cate">
                        <Form.Select aria-label="Default select example" className="form-select form-select-sm">
                            <option>CATEGORIES</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className="cate">
                        <Form.Select aria-label="Default select example" className="form-select form-select-sm">
                            <option>CALENDER</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className="cate">
                        <Form.Select aria-label="Default select example" className="form-select form-select-sm">
                            <option>DATING</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Somethingtodo;
