import CardRow from './CardRow'
function Music() {
    const sr='https://cdn.pixabay.com/photo/2022/01/31/15/18/coffee-6984075_1280.jpg'
    const trendingnow={genre:'Trending Now',cards:[[sr,'Hearbeat bbxnbzxbbzxnb xnmz bdxsjh dshbh dsjbjh dhjsbjh jksbjMusic'],[sr,'Hearbeat Music'],[sr,'Hearbeat Music'],[sr,'Hearbeat Music'],[sr,'Hearbeat Music']]}
    const freshhit={genre:'Fresh Hit',cards:[[sr,'Hearbeat Music'],[sr,'Hearbeat Music'],[sr,'Hearbeat Music'],[sr,'Hearbeat Music'],[sr,'Hearbeat Music']]}
    const pickyourmood={genre:'Pick your Mood',cards:[[sr,'Hearbeat Music'],[sr,'Hearbeat Music'],[sr,'Hearbeat Music'],[sr,'Hearbeat Music'],[sr,'Hearbeat Music']]}
    //const pickyurmood=[[sr,'Hearbeat Music'],[sr,'Hearbeat Music'],[sr,'Hearbeat Music'],[sr,'Hearbeat Music'],[sr,'Hearbeat Music']]
    return (
        <div className='music_body'>
            <CardRow cardinfo={trendingnow.cards} genre={trendingnow.genre}/>
            <CardRow cardinfo={freshhit.cards} genre={freshhit.genre}/>
            <CardRow cardinfo={pickyourmood.cards} genre={pickyourmood.genre}/>
        </div>
    );
}

export default Music;