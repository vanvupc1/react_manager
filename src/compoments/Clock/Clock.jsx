<<<<<<< HEAD
import React, {useState, useEffect} from 'react'

function formatdate (today){
    const weekdays = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
    const day = weekdays[today.getDay()];
    const dd = `0${today.getDate()}`.slice(-2);
    const mm = `0${today.getMonth() + 1}`.slice(-2);
    const yyyy = today.getFullYear();
    const hours = `0${today.getHours()}`.slice(-2);
    const minutes = `0${today.getMinutes()}`.slice(-2);
    const seconds = `0${today.getSeconds()}`.slice(-2);
    
    // const todays = `${day}, ${dd}/${mm}/${yyyy}`;
    // const nowtime= `${h} giờ ${m} phút ${s} giây`;
    return `${day}, ${dd}/${mm}/${yyyy} - ${hours} giờ  ${minutes} phút ${seconds} giây `;
}
const Clock = () => {
    const [TimeString,setTimeString] = useState('');
    useEffect(() =>{
        setInterval(() => {
            const today = new Date();

            const newTimeString = formatdate(today);

            setTimeString(newTimeString);
        }, 1000);
       
    }, []);
  return (
    <span className="date">{TimeString}</span>
  )
}

=======
import React, {useState, useEffect} from 'react'

function formatdate (today){
    const weekdays = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
    const day = weekdays[today.getDay()];
    const dd = `0${today.getDate()}`.slice(-2);
    const mm = `0${today.getMonth() + 1}`.slice(-2);
    const yyyy = today.getFullYear();
    const hours = `0${today.getHours()}`.slice(-2);
    const minutes = `0${today.getMinutes()}`.slice(-2);
    const seconds = `0${today.getSeconds()}`.slice(-2);
    
    // const todays = `${day}, ${dd}/${mm}/${yyyy}`;
    // const nowtime= `${h} giờ ${m} phút ${s} giây`;
    return `${day}, ${dd}/${mm}/${yyyy} - ${hours} giờ  ${minutes} phút ${seconds} giây `;
}
const Clock = () => {
    const [TimeString,setTimeString] = useState('');
    useEffect(() =>{
        setInterval(() => {
            const today = new Date();

            const newTimeString = formatdate(today);

            setTimeString(newTimeString);
        }, 1000);
       
    }, []);
  return (
    <span className="date">{TimeString}</span>
  )
}

>>>>>>> fcbc12e (update func)
export default Clock