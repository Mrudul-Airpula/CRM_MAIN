import { BsThreeDotsVertical, BsBellFill } from "react-icons/bs";
import "./List.css";
export default function List() {
    
    return <>
        <div className="list">
            <div className="list_title">
                <label>User List</label>
                <BsThreeDotsVertical />
            </div>
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
        </div>
    </>
}

function SingleRow() {
    const list = ["Larry Claton"];
    return (
        <div className="list_singlerow">
            <div className="list_singlerow_circle">
                <BsBellFill />
            </div>
            {
                list.map((data) =>
                    <label>{data}</label>
                )
            }
            <button>Pending</button>
        </div>
    );
}