//import Video from './lac.mp4'
import { useRef, useState } from 'react';
function Tiktok(pro) {
    const vdoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    function handlePlay(e) {
        console.log('ghh', vdoRef.current);
      
            if (isPlaying) {
                vdoRef.current.pause();
                setIsPlaying(false);
            }
            else {
                vdoRef.current.play();
                setIsPlaying(true);
            }
            vdoRef.current.loop = true;
        
    }
    const vdo = pro.vdo;
    return (
        <div class="tiktok" >
            <div onClick={handlePlay} style={{position: 'absolute',backgroundColor: 'white',width: '80%',height: '80%'}} ></div>
            <section>
                <a target="_blank" rel={vdo.rel} title={vdo.user} href="#">{vdo.user}</a>
                <p>{vdo.title}<br />
                    {vdo.hashTags.map((val, ind) =>
                        <a title={val} target="_blank" rel={vdo.rel} href={`https://www.tiktok.com/tag/${val}`}>#{val}</a>
                    )
                    }
                </p>
                <a target="_blank" rel={vdo.ref} title={vdo.audioTitle} href={vdo.origin}>{vdo.audioTitle}</a>
            </section>
            <video ref={vdoRef} src={vdo.video} >
            </video>

        </div>
    );
}

export default Tiktok;