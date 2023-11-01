import React, { useEffect, useMemo, useState } from 'react';

const ListTitle = () => {
  const [date, setDate] = useState(currentDate);

  return (
    <section className='list-title'>
      <h2>today's to do list </h2>
      <p className='date'>{date}</p>
    </section>
  )
}

let currentDate = () => {
  return new Date().toLocaleString([], { year: 'numeric', month: 'short', day: 'numeric' })
}
export default ListTitle