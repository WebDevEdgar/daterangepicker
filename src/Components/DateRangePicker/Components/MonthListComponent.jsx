import {useState} from "react";

const MonthListComponent = (props) => {
    const months = props.months;
    function ShowYear(props){
        const monthItem = props.monthItem;
        const monthYear = monthItem.year;
        if (monthItem.startYear){
            return <span className="extra_year">{monthYear}</span>
        }
    }
    function monthClickFunc(e, monthName, monthYear){
        e.preventDefault();
        document.querySelector('#'+monthName+'_'+monthYear).scrollIntoView({
            behavior:'smooth',
            alignToTop: true,
            block:'start'
        });
    }
    return (
        <div className="popupCalendar_months">
            <span className="popupCalendar_underLay"></span>
            {months.map((monthItem, key) => <a key={key} onClick={e => {
                monthClickFunc(e, monthItem.month.name, monthItem.year)
            }} href={"#"}>
                {monthItem.month.name}
                <ShowYear monthItem={monthItem} />
            </a> )}
        </div>
    )
}
export default MonthListComponent;