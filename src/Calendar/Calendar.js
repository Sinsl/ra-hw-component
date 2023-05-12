import './main.css';
import React from 'react';

const Calendar = (props) => {
  const { dateNow  } = props;
  const current = new Date(dateNow);

  const weeksShort = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const weeksLong = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  const monthNamesCases = [
    "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
  ];

  const dateArr = setArrayDate(current);

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{weeksLong[current.getDay()]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{current.getDate()}</div>
          <div className="ui-datepicker-material-month">{monthNamesCases[current.getMonth()]}</div>
          <div className="ui-datepicker-material-year">{current.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{monthNames[current.getMonth()]}</span>&nbsp;
          <span className="ui-datepicker-year">{current.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
      <colgroup>
        {weeksShort.map((_, idx) => 
          { 
            return idx < 5 ? (<col key={"col" + idx}/>) : (<col key={"col" + idx} className="ui-datepicker-week-end" />)
          }            
        )}
      </colgroup>
        <thead>
          <tr>
          {weeksShort.map((_, idx, arr) => (<th scope="col" key={"col-title" + idx} title={weeksLong[idx === 6 ? 0 : idx + 1]}>{arr[idx]}</th>))}
          </tr>
        </thead>
        <tbody>
          {dateArr.map((arr, idx) => (<tr key={"week-" + (idx + 1)}>{arr.map(date => date)}</tr>))}
        </tbody>
      </table>
    </div>
  );
}

function getDayOfMonth(year, month, day) {
  return day === 0 ? new Date(year, month + 1, 0) : new Date(year, month, 1);
}

function setArrayDate (current) {
  const result = [];
  let firstDay = getDayOfMonth(current.getFullYear(), current.getMonth(), 1).getDay();
  firstDay = firstDay === 0 ? 7 : firstDay;
  const lastDate = getDayOfMonth(current.getFullYear(), current.getMonth(), 0).getDate();
  let lastDayPrev = getDayOfMonth(current.getFullYear(), current.getMonth() - 1, 0).getDate();
    
  let tempArr = [];
  let count = firstDay;
  if(firstDay > 1) {
    for (let i = firstDay - 1; i > 0; i--) {
      tempArr.push(<td key={"date-prev-" + lastDayPrev} className="ui-datepicker-other-month">{lastDayPrev}</td>);
      lastDayPrev--;        
    }
    tempArr.reverse();
  }
  
  for (let i = 1; i <= lastDate; i++) {
    if(i === current.getDate()) {
      tempArr.push(<td key={"date-" + i} className="ui-datepicker-today">{i}</td>);
    } else {
      tempArr.push(<td key={"date-" + i}>{i}</td>);
    }    
    count += 1;
    if (count === 8) {
      count = 1;
      result.push(tempArr);
      tempArr = [];
    }    
  }

  if (tempArr.length) {
    for (let i = 1; count < 8; i++) {
      tempArr.push(<td key={"date-next-" + i} className="ui-datepicker-other-month">{i}</td>);
      count += 1;
    }
    result.push(tempArr);
  }
  return result;
}


export default Calendar;