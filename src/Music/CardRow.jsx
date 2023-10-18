import './CardRow.css'
function CardRow(pro) {
    return ( 
        <div className='card_row_h3_div'>
            <h3>{pro.genre}</h3>
            <div className='card_row_div' >
            {pro.cardinfo && pro.cardinfo.map((val,ind)=>
                <div key={ind} className='card_div'>
                    <img src={val[0]}/>
                    <span>{val[1]}</span>
                </div>
            )}
            </div>
        </div>
     );
}

export default CardRow;