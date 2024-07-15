import { useState } from "react";

const AddRoomReq = (theme) => {
    const [RoomReqData, setRoomReqData] = useState({
        Name: "",
        Email: "",
        Phone: "",
        City: "",
        Location: "",
        Requirement: "",
        Date: "",
        Rent: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoomReqData({ ...RoomReqData, [name]: value });
    };

    const handleAddRoomReq = async (e) => {
        e.preventDefault();

        const requestData = {
            eventID: "1007",
            addInfo: {
                UserName: RoomReqData.Name,
                Email: RoomReqData.Email,
                Mobile: RoomReqData.Phone,
                City: RoomReqData.City,
                Location: RoomReqData.Location,
                Requirement: RoomReqData.Requirement,
                ShiftDate: RoomReqData.Date,
                RentPrice: RoomReqData.Rent,

            },
        };

        try {
            const response = await fetch("http://localhost:5164/requirements", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();
            console.log(data, "API response RoomReq data");

            if (data.rData && data.rData.rCode === 0) {
                alert(data.rData.rMessage || "RoomReq added successfully!");
                resetForm();
            } else {
                alert(data.rData.rMessage || "Failed to add RoomReq.");
                // resetForm();
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`Some error occurred, can't add RoomReq now: ${error}`);
            resetForm();
        }
    };

    const resetForm = () => {
        setRoomReqData({
            Name: "",
            Email: "",
            Phone: "",
            City: "",
            Location: "",
            Requirement: "",
            Date: "",
            Rent: "",
        });
    };

    return (
        <div className={`bg-${theme} my-3`}>
            <section>
                <div className="mx-3"><p className="fs-3 text-success text-center">We Can Help You Find The RoomReq Or A House. Post Your Requirement Now!</p></div>
                <form
                    className="form-container row g-3 bg-glass my-1 mx-1"
                    onSubmit={handleAddRoomReq}
                    autoComplete="on"
                    spellCheck="true"
                    noValidate
                >
                    <div className="col-md-6">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Name"
                            name="Name"
                            placeholder="Enter Full Name"
                            value={RoomReqData.Name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="Email"
                            name="Email"
                            placeholder="Enter Email Address"
                            value={RoomReqData.Email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Phone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="phone"
                            className="form-control"
                            id="Phone"
                            name="Phone"
                            placeholder="Enter Mobile Number"
                            value={RoomReqData.Phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="City" className="form-label">
                            City
                        </label>
                        <select
                            className="form-select"
                            id="City"
                            name="City"
                            value={RoomReqData.City}
                            onChange={handleChange}
                            required
                        >
                            <option defaultValue>Select City</option>
                            <option value="Noida">Noida</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Gurgaon">Gurgaon</option>
                            <option value="Ghaziabad">Ghaziabad</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Location" className="form-label">
                            Location
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Location"
                            name="Location"
                            placeholder="Enter Desired Location"
                            value={RoomReqData.Location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Requirement" className="form-label">
                            Requirement
                        </label>
                        <select
                            className="form-select"
                            id="Requirement"
                            name="Requirement"
                            value={RoomReqData.Requirement}
                            onChange={handleChange}
                            required
                        >
                            <option defaultValue>Choose Type</option>
                            <option value="Sharing RoomReq">Sharing Room</option>
                            <option value="Private RoomReq">Private Room</option>
                            <option value="Entire House">Entire House</option>
                            <option value="Male PG">Male PG</option>
                            <option value="Female PG">Female PG</option>
                            <option value="Co-Living">Co Living</option>
                            <option value="Flat">Flat</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Date" className="form-label">
                            Shifting Date
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="Date"
                            name="Date"
                            placeholder="Enter Shifting Date"
                            value={RoomReqData.Date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Rent" className="form-label">
                            Expected Rent
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="Rent"
                            name="Rent"
                            placeholder="Expected Rent Range (Rs)"
                            value={RoomReqData.Rent}
                            onChange={handleChange}
                            min={1000}
                            required
                        />
                        {/* <input
                            type="range"
                            className="form-control"
                            id="Rent"
                            name="Rent"
                            placeholder="Rs. Expected Rent Range"
                            value={RoomReqData.Rent}
                            onChange={handleChange}
                            min={1000}
                            max={25000}
                            step={1000}
                            required
                        />
                        <div className="my-1">
                            Selected Amount: Rs. {RoomReqData.Rent}
                        </div> */}
                    </div>
                    <div className="col-md-12 mb-3 d-flex justify-content-center">
                        <button
                            className="btn btn-danger mx-1"
                            type="button"
                            onClick={resetForm}
                        >
                            <i className="fa fa-remove">&nbsp;</i>Cancel
                        </button>
                        <button className="btn btn-success mx-1" type="submit">
                            <i className="fas fa-save">&nbsp;</i>Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddRoomReq;